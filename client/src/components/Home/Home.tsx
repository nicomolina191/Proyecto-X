import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import Section3 from '../Section3/Section3';
import Section4 from '../Section4/Section4';
import Section5 from '../Section5/Section5';
import ScrollReveal from 'scrollreveal';
import './Home.css';

export default function Home() {

    useEffect(() =>{
        ScrollReveal().reveal('.box1', {
            origin: 'right',
            delay: 375,
            duration: 1000,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: true
        })
        ScrollReveal().reveal('.box2', {
            origin: 'right',
            delay: 375,
            duration: 1000,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: true
        })
        ScrollReveal().reveal('.box3', {
            origin: 'right',
            delay: 375,
            duration: 1000,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: true
        })
        ScrollReveal().reveal('.box4', {
            origin: 'right',
            delay: 375,
            duration: 1000,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: true
        })
        ScrollReveal().reveal('.box5', {
            origin: 'right',
            delay: 375,
            duration: 1000,
            distance: '500px',
            scale: 1,
            easing: 'ease',
            reset: true
        })
    }, [])

    return (
        <div className='home'>
            <Navbar/>
            <div className='box1'>
                <Section1/>
            </div>
            <div className='box2'>
                <Section2/>
            </div>
            <div className='box3'>
                <Section3/>
            </div>
            <div className='box4'>
                <Section4/>
            </div>
            <div className='box5'>
                <Section5/>
            </div>
            <Footer/>
        </div>
    )

}
