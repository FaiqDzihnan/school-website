import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import useUser from '../Hooks/useUser';
import './Header.css'

const Header = () => {
    const {user} = useUser();
    const navigate = useNavigate();

    return (
    <div>  
        <nav>
            <div className='logo'>
                <Link to="/">
                    <img src="/Resources/Logo.jpeg" alt="Elementary School logo"></img>
                </Link>
            </div>
            <div className='name'>
                <h1>Kuningan Elementary School</h1>
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/admission">Admission</Link></li>
                <li><Link to="/news">News</Link></li>
                {user 
                    ?<li><Link to="/portal">Portal</Link></li>
                    :<p></p>}
            </ul>
            <div>
                {user
                    ? <button className='logout-button' onClick={() => {
                        signOut(getAuth()).then(() => {
                            navigate("/");
                        });
                    }}>Log Out</button>
                    : <button className='login-button' onClick={() => {
                        navigate('/login');
                    }}>Log In</button>}
            </div>
        </nav>
    </div>
    );
  };
  
  export default Header;