import React from "react";
import style from './Section5.module.css';
import img from '../../assets/img1.jpg';

export default function Section5() {

    return (
        <section className={style.section}>
            <div className={style.newsletter}>
                <div className={style.field}>
                    <h2 className={style.title}>Suscribe to the newsletter to receive the last update on new proyects to come</h2>
                    <form action="submit" className={style.form}>
                        <input type="email" className={style.input} name='email' />
                        <button type='submit' className={style.btn}>Suscribe</button>
                    </form>
                </div>
                <img src={img} alt="imagen piola" className={style.img}/>
            </div>
        </section>
    )

}
