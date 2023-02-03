import style from './Home.module.css';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import img1 from '../../assets/project1.png';
import { Link } from 'react-router-dom';
import project1 from '../../assets/project1.png';
import Footer from '../Footer/Footer';


export default function Home() {

    return (
        <div className='Home'>
            <Navbar/>
            <section className={style.section1}>
                <h1 className={style.titulo}>Give your software a plus with this AI projects!</h1>
                <img src={img1} alt="img1" className={style.img1}/>
            </section>
            <section className={style.section2}>
                <h1>Look this amazings projects!</h1>
                <div className={style.projects}>
                    <Link to='/project1'>
                        <img src={project1} alt="project1" />
                    </Link>
                    <Link to='/project1'>
                        <img src={project1} alt="project2" />
                    </Link>
                    <Link to='/project1'>
                        <img src={project1} alt="project3" />
                    </Link>
                    <Link to='/project1'>
                        <img src={project1} alt="project4" />
                    </Link>
                </div>
            </section>
            <Footer/>
        </div>
    )

}
