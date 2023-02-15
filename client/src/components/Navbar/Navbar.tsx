import React from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png';

export default function Navbar() {

    return (
        <div className={style.navbar}>
            <img src={logo} alt="logo" className={style.img}/>
            <span className={style.cont_link}>
                <Link className={style.link} to='/'>
                    Home
                </Link>
            </span>
            <span className={style.cont_link}>
                <Link className={style.link} to='/shop'>
                    Shop
                </Link>
            </span>
            <span className={style.cont_link}>
                <Link className={style.link} to='/about'>
                    About us
                </Link>
            </span>
            <span className={style.cont_link}>
                <Link className={style.link} to='/contact'>
                    Contact us
                </Link>
            </span>
            <span className={style.cont_link}>
                <Link className={`${style.link} ${style.in}`} to='/login'>
                    Sign in
                </Link>
            </span>
            <span className={style.cont_link}>
                <Link className={`${style.link} ${style.in}`} to='/register'>
                    Sign up
                </Link>
            </span>
        </div>
    )

}
