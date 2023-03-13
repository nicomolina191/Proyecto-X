import React from "react";
import style from './Section2.module.css';

export default function Section2() {

    return (
        <div className={style.section}>
            <h1 className={style.title}>What we offer?</h1>
            <div className={style.projects}>
                <h2>Projects</h2>
            </div>
            <div className={style.courses}>
                <h2>Courses</h2>
            </div>
        </div>
    )

}
