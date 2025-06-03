import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Carousel from '../Components/Carousel'; 

const Home = () => {
  const images = [
    "Resources/Carousel0.jpg",
    "Resources/Carousel1.JPG",
    "Resources/Carousel2.jpg",
    "Resources/Carousel3.jpeg",
    "Resources/Carousel4.png",
    "Resources/Carousel5.jpg",
  ];
    return (
      <main>
      <section className="carousel-section">
        <div className="carousel">
          {<Carousel images={images} />}
        </div>
      </section>
      <section className="welcome-section">
        <img src="Resources/Headmaster.png" alt="Headmaster" className="welcome-photo" />
        <div className="welcome-text">
          <h1>Welcome to MI Kuningan</h1>
          <p>
          MI Kuningan is an exceptional Islamic elementary school renowned for its unparalleled educational standards and achievements. 
          For the past decade, it has consistently been awarded the title of the best elementary school in the world, a testament to its unwavering commitment to excellence. 
          The school’s rigorous curriculum and dedicated faculty have cultivated an environment where young minds thrive and develop into influential leaders. 
          Its graduates have gone on to become some of the world's most influential individuals, making significant contributions in various fields such as science, technology, literature, and public service. 
          MI Kuningan stands out not only for its academic excellence but also for its unique approach to education, offering college-level subjects to children aged 7-12. 
          This innovative curriculum is designed to challenge students and foster a deep understanding of complex concepts from a young age. 
          The school's holistic approach ensures that students are not only academically proficient but also well-rounded, ethical, and compassionate individuals, ready to make a positive impact on the world.
          </p>
        </div>
      </section>
      <section className="vision-mission-section">
        <div className="vision">
          <h2>Vision</h2>
          <p>To nurture knowledgeable, ethical, and compassionate leaders grounded in Islamic values, striving for excellence and contributing positively to society.</p>
        </div>
        <div className="mission">
          <h2>Mission</h2>
          <p>
            To provide a holistic education that integrates Islamic teachings with contemporary knowledge, fostering a strong foundation in faith, character, and academic excellence. 
            We aim to cultivate virtues such as honesty, respect, empathy, and responsibility while promoting active community engagement. 
            Our school is dedicated to creating a supportive and inclusive environment, encouraging parental involvement, and committing to continuous improvement to ensure the success and well-being of every student.
          </p>
        </div>
      </section>
      <section className="facility-section">
        <h2>Facility</h2>
        <div className="facility-list">
          <p>Classroom</p>
          <p>Library</p>
          <p>Wifi</p>
          <p>Computer Lab</p>
          <p>Football Field</p>
          <p>Proyektor</p>
          <p>Mosque</p>
          <p>Basketball Field</p>
          <p>Music Studio</p>
          <p>Parking Lot</p>
          <p>Volleyball Field</p>
          <p>Botanical Garden</p>
          <p>Ping Pong Table</p>
          <p>MMA Arena</p>
          <p>Swimming Pool</p>
          <p>Shooting Range</p>
        </div>
      </section>
      <section className="news-section">
        <div className="news-info">
          <h2>News and Informations</h2>
          <ul>
            <li><a href="/article/best-elementary-school">MI Kuningan Kanigoro Blitar - The best elementary school</a></li>
            <li><a href="/article/science-competition">Alberto Einsteinio - The winner of the science competition in Jakarta</a></li>
            <li><a href="#">The robotic team of MI Kuningan built a transformer</a></li>
            <li><a href="#">M. Ridwan won the badminton competition in Singapore</a></li>
            <li><a href="#">How our students won the best student award</a></li>
            <li><a href="#">The graduation ceremony of classes 2024</a></li>
            <li><a href="#">Mr. Kusono won the best headmaster in the world for the third time!</a></li>
            <li><a href="#">Robert Lewandowski, grade 6th student, won the English Debate in Zimbabwe</a></li>
            <li><a href="#">Vladimir Putin visits MI Kuningan to recruit a spy for the KGB</a></li>
          </ul>
        </div>
        <div className="new-students">
          <h2>New Students Admission 2024/2025</h2>
          <ul>
            <li><a href="#">Students admission schedule document</a></li>
            <li><a href="#">The study guideline for written examination</a></li>
            <li><a href="#">Scholarship program</a></li>
            <li><a href="#">New students quota</a></li>
            <li><a href="#">Detail of tuition fees and other fees</a></li>
            <li><a href="#">Documents to be prepared by new students</a></li>
            <li><a href="#">Registration guideline</a></li>
            <li><a href="#">Written exam announcement</a></li>
            <li><a href="#">Curriculum for freshmen</a></li>
          </ul>
        </div>
      </section>
      <section className="admission-section">
        <div className="admission-section-left">
          <h2>Admission of the new students 2025/2026</h2>
          <button className="register-button"><Link to="/admission-form">Register</Link></button>
        </div>
        <div>
          <h2>Admission Schedule</h2>
          <ul>
            <li>23 June - 5 July Registration Online or Offline</li>
            <li>6 July Examination Test</li>
            <li>10 July Announcement</li>
          </ul>
        </div>
      </section>
    </main>
    );
  };
  
  export default Home;