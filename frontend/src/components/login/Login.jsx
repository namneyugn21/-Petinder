import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { RiCloseLine, RiFacebookCircleFill } from 'react-icons/ri';
import './login.css';
import logo from '../../assets/logo.png';

const Login = ({ isLoginFormVisible, toggleLoginForm, isFadingOut }) => (
    <>
        {isLoginFormVisible && (
            <>
                <div className={`overlay ${isFadingOut ? 'fade-out' : 'fade-in'}`} onClick={toggleLoginForm}></div>
                <div className={`navbar__menu-sign-in-form ${isFadingOut ? 'fade-out' : 'fade-in'}`}>
                    <RiCloseLine id='close-icon' color = '#042c54' size={25} onClick={toggleLoginForm} />
                    <img src={logo} alt='logo' />
                    <h2 className='inter__bold'>Get Started !</h2>
                    <p className='ibm-plex-mono-regular'>By signing in, you agree to our terms and conditions.</p>
                    <div className='navbar__menu-sign-in-form__icon-container'>
                        <div className='navbar__menu-sign-in-form__icon-inner-container'>
                            <FcGoogle />
                        </div>
                        <span className='inter__medium'>Google Account</span>
                    </div>
                    <div className='navbar__menu-sign-in-form__icon-container '>
                        <div className='navbar__menu-sign-in-form__icon-inner-container'>
                            <RiFacebookCircleFill color = '#042c54' />
                        </div>
                        <span className='inter__medium'>Facebook</span>
                    </div>
                </div>
            </>
        )}

    </>
);

export default Login;
