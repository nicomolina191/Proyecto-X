import React from "react";
import { Link } from 'react-router-dom';
import style from './Section3.module.css';
import img from '../../assets/project1.png';

export default function Section3() {

    return (
        <section className={style.section}>
            <div className={style.info}>
                <div className={style.title}>
                    <h2>We help innovators like you to improve your project with differents IA processes!</h2>
                </div>
                <div className={style.text}>
                    <h2>some stadistic information</h2>
                </div>
            </div>
            <div className={style.blog}>
                <div className={style.post1}>
                    <div className={style.post}>
                        <img src={img} alt="gif1" className={style.img} />
                        <Link className={style.link}>
                            See more about →
                        </Link>
                    </div>
                    <div className={style.post}>
                        <img src={img} alt="gif1" className={style.img} />
                        <Link className={style.link}>
                            See more about →
                        </Link>
                    </div>
                </div>
                <div className={style.post2}>
                    <div className={style.post}>
                        <img src={img} alt="gif1" className={style.img} />
                        <Link className={style.link}>
                            See more about →
                        </Link>
                    </div>
                    <div className={style.post}>
                        <img src={img} alt="gif1" className={style.img} />
                        <Link className={style.link}>
                            See more about →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
