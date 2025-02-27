import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './about.css'
import index from '../../assets/index.jpeg'
import Login from '../../components/login/Login'
import Navbar from '../navbar/Navbar';

const About = () => {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [greeting, setGreeting] = useState('Welcome to Petinder !');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsSignedIn(true);
            
            // Determine the greeting based on the time of the day
            const currentHour = new Date().getHours();
            if (currentHour >= 5 && currentHour < 12) {
                setGreeting('Good morning, ' + localStorage.getItem('firstName') + ' !');
            } else if (currentHour >= 12 && currentHour < 18) {
                setGreeting('Good afternoon, ' + localStorage.getItem('firstName') + ' !');
            } else {
                setGreeting('Good evening, ' + localStorage.getItem('firstName') + ' !');
            }
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
            }, 0);
        } else {
            setIsLoginFormVisible(true);
        }
    };

    // Render the get started button if user is not signed in
    const renderButton = () => {
        return (
            <div className='about__button slide-top-button'>
                <button className='montserrat-medium' onClick={isSignedIn ? navigateToSwipePage : toggleLoginForm}>
                    Get Started
                </button>
            </div>
        );
    };

    return (
        <>
            <Navbar />
            <div className='about' id='about'>
                <div className='about__title'>
                    {/* Title and introduction */}
                    { isSignedIn ? 
                        <h1 className='montserrat-bold slide-top-title'>{greeting}</h1>
                        :
                        <h1 className='montserrat-bold slide-top-title'>{greeting}</h1>
                    }
                    <div className='about__introduction montserrat-medium slide-top-introduction'>
                        <p>Welcome to Petinder,<br></br><br></br>You can now find your perfect furry companion is as easy as swiping right! Our web application connects you with adorable pets available for adoption at local shelters.<br></br><br></br> Discover your new best friend today!</p>
                    </div>
                    {renderButton()}
                </div>
                <div className='about__image'>
                    <img src={index} alt='smiling dog' draggable='false' />
                </div>

                {/* Adding sign in form */}
                <Login isLoginFormVisible={isLoginFormVisible} toggleLoginForm={toggleLoginForm} isFadingOut={isFadingOut} />
            </div>
        </>
    )
}

export default About