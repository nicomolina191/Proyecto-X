import React from 'react';
import style from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <div className={style.footer}>
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
    )
}
