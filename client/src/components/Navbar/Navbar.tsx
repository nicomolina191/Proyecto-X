import React from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';

export default function Navbar() {

    return (
        <div className={style.navbar}>
            <img src={logo} alt="logo" className={style.img}/>
            <Link className={style.link} to='/'>
                Home
            </Link>
            <Link className={style.link} to='/shop'>
                Shop
            </Link>
            <Link className={style.link} to='/about'>
                About us
            </Link>
            <Link className={style.link} to='/contact'>
                Contact us
            </Link>
            <Link className={style.link} to='/login'>
                Sign in
            </Link>
            <Link className={style.link} to='/register'>
                Sign up
            </Link>
        </div>
    )

}
