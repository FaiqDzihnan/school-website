import fs from 'fs';
import admin from 'firebase-admin';
import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';
import winston from 'winston';
import 'winston-mongodb';

const credentials = JSON.parse(
    fs.readFileSync('./credentials.json')
);
admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

/*
const corsOptions = {
    origin: ['https://mikuningan.com', 'https://admin.yourwebsite.com'],
    methods: 'GET,POST,PUT',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
 };
*/

const app = express();
app.use(cors())
app.use(express.json());

app.use(helmet()); // Secure HTTP headers
app.use(mongoSanitize()); // Sanitize data

// Rate limiting to prevent brute force attacks
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per window
    keyGenerator: (req) => req.ip,
    message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

app.use(async (req, res, next) => {
    const { authtoken } = req.headers;

    if (authtoken) {
        try {
            req.user = await admin.auth().verifyIdToken(authtoken);
        } catch (e) {
            return res.sendStatus(400);
        }
    }

    req.user = req.user || {};

    next();
});

// Winston logging setup
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.MongoDB({
            db: 'mongodb://127.0.0.1:27017/school-website', // Database name only
            collection: 'logs', // Specify the collection name here
            level: 'info', // Optionally set the log level
        })
    ],
});

app.get('/article/:name', async (req, res) => {
    const {name} = req.params;
    const {uid} = req.user;

    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db('school-website');

    const article = await db.collection('articles').findOne({name});

    if (article) {
        const likeIds = article.likeIds || [];
        article.canLike = uid && !likeIds.includes(uid)
        res.json(article);
    } else {
        res.sendStatus(404);
    }

});

app.use((req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.sendStatus(401);
    }
});

app.put('/article/:name/like', async (req, res) => {
    const {name} = req.params;
    const { uid } = req.user;

    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db('school-website');

    const article = await db.collection('articles').findOne({ name });

    if (article) {
        const likeIds = article.likeIds || [];
        const canLike = uid && !likeIds.includes(uid);
   
        if (canLike) {
            await db.collection('articles').updateOne({ name }, {
                $inc: { likes: 1 },
                $push: { likeIds: uid },
            });
        }

        const updatedArticle = await db.collection('articles').findOne({ name });
        res.json(updatedArticle);
    } else {
        res.send('That article doesn\'t exist');
    }
});

app.post('/article/:name/comment', async (req, res) => {
    const { name } = req.params;
    const { text } = req.body;
    const { email } = req.user;

    const client = new MongoClient('mongodb://127.0.0.1:27017');
    await client.connect();
    const db = client.db('school-website');

    await db.collection('articles').updateOne({ name }, {
        $push: { comments: { postedBy: email, text } },
    });
    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.send('That article doesn\'t exist!');
    }
});

app.post('/admission/submit-form', async (req, res) => {
    const { name, gender, dob, address, parentName, parentPhone } = req.body;

    try {
        const client = new MongoClient('mongodb://127.0.0.1:27017');
        await client.connect();

        const db = client.db('school-website');
        const student = {
            name,
            gender,
            dob,
            address,
            parentName,
            parentPhone,
            submittedAt: new Date(), 
        };

        await db.collection('new-students').insertOne(student);

        res.status(201).json({ message: 'Student admission successful' });
    } catch (error) {
        console.error('Error saving student admission:', error);
        res.status(500).json({ message: 'Error saving student admission', error });
    }
});

app.get('/portal', async (req, res) => {
    const { uid } = req.user;
    const ip = req.headers['x-forwarded-for'] || req.ip;

    try {
        const client = new MongoClient('mongodb://127.0.0.1:27017');
        await client.connect();
        const db = client.db('school-website');

        const student = await db.collection('students').findOne({ firebaseUID: uid });

        if (student) {
            logger.info('User accessed portal', {
                ip: ip,
                firebaseUID: uid,
                name: student.name,
                email: student.email,
            });
            res.status(200).json(student); 
        } else {
            res.status(404).json({ message: 'Student information not found' });
        }

    } catch (error) {
        console.error('Error fetching student information:', error);
        res.status(500).json({ message: 'Error fetching student information', error });
    }
});

app.listen(8000, () =>{
    console.log('Server is listening on port 8000');
});