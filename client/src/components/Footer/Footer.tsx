import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';
import img from '../../assets/logo1.png';

export default function Footer() {

    return (
        <div className={style.footer}>
            <div className={style.image}>
                <img src={img} alt="logo" className={style.img}/>
            </div>
            <div className={style.links}>
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
            </div>
        </div>
    )
}
