import React from "react";
import style from './Section1.module.css';
import img from '../../assets/project1.png';
import { Link } from 'react-router-dom';

export default function Section1() {

    return (
        <div className={style.section}>
            <div>
                <h1 className={style.title}>Give your software a plus with this AI projects!</h1>
                <Link to='/shop' className={style.link}>
                    <button className={style.button}>Shop</button>
                </Link>
            </div>
            <div>
                <img src={img} alt="video del dounqi" className={style.img} />
            </div>
        </div>
    )
}
