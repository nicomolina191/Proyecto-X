import React from "react";
import { Link } from 'react-router-dom';
import style from './Section4.module.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import gif from '../../assets/mind_blown.gif';
import gif2 from '../../assets/gif2.gif';
import gif3 from '../../assets/gif3.gif';
import gif4 from '../../assets/gif4.gif';


export default function Section4() {

    const responsive = {
        superLargeDesktop: {
        // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className={style.section}>
            <h1 className={style.title}>Featured projects</h1>
            <div className={style.carousel}>
                <Carousel 
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                >
                    <div className={style.item}>
                        <img src={gif} alt="project 1" className={style.gif} />
                        <p className={style.text}>Some information about the project...</p>
                        <Link className={style.link}>
                            See more
                        </Link>
                    </div>
                    <div className={style.item}>
                        <img src={gif2} alt="project 2" className={style.gif} />
                        <p className={style.text}>Some information about the project...</p>
                        <Link className={style.link}>
                            See more
                        </Link>
                    </div>
                    <div className={style.item}>
                        <img src={gif3} alt="project 3" className={style.gif} />
                        <p className={style.text}>Some information about the project...</p>
                        <Link className={style.link}>
                            See more
                        </Link>
                    </div>
                    <div className={style.item}>
                        <img src={gif4} alt="project 4" className={style.gif} />
                        <p className={style.text}>Some information about the project...</p>
                        <Link className={style.link}>
                            See more
                        </Link>
                    </div>
                </Carousel>
            </div>
        </section>
    )

}
