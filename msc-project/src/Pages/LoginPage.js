import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './LoginPage.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/');
        } catch (e) {
            setError(e.message);
        }
    }

    return (
        <>
            <div className='login-container'>
                <h1 className='login-heading'>Log In</h1>
                {error && <p className="error">{error}</p>}
                <input 
                    className='input-email'
                    placeholder="Your email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
                <input
                    className='input-password'
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)} />
                <button className='login-button' onClick={logIn}>Log In</button>
            </div>
        </>
    );
}

export default LoginPage;