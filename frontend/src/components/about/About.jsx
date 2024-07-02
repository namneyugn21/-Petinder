import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './about.css'
import index from '../../assets/index.jpeg'
import Login from '../../components/login/Login'

const About = () => {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsSignedIn(true);
        }
    }, []);

    const navigateToSwipePage = () => {
        navigate('/swipe');
    }

    const toggleLoginForm = () => {
        if (isLoginFormVisible) {
            setIsFadingOut(true);
            setTimeout(() => {
                setIsLoginFormVisible(false);
                setIsFadingOut(false);
            }, 250);
        } else {
            setIsLoginFormVisible(true);
        }
    };

    return (
        <div className='about' id='about'>
            <div className='about__title'>
                <h1 className='inter__bold slide-top-title'>Find your sidekick !</h1>
                <div className='about__introduction ibm-plex-mono-regular slide-top-introduction'>
                    <p>Welcome to Petinder,<br></br><br></br>You can now find your perfect furry companion is as easy as swiping right! Our web application connects you with adorable pets available for adoption at local shelters.<br></br><br></br> Discover your new best friend today!</p>
                </div>
                {isSignedIn ?
                    <div className='about__button slide-top-button'>
                        <button className='ibm-plex-mono-regular' onClick={navigateToSwipePage}>Get Started</button>
                    </div>
                    :
                    <div className='about__button slide-top-button'>
                    <button className='ibm-plex-mono-regular' onClick={toggleLoginForm}>Get Started</button>
                    </div>
                }

            </div>
            <div className='about__image'>
                <img src={index} alt='smiling dog' />
            </div>

            {/* Adding sign in form */}
            <Login isLoginFormVisible={isLoginFormVisible} toggleLoginForm={toggleLoginForm} isFadingOut={isFadingOut} />
        </div>
    )
}

export default About