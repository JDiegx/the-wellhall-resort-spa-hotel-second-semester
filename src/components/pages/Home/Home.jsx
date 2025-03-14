import React, { useRef } from "react";
import "./Home.css";
import AboutUs from "../../common/AboutUs/AboutUs";
import Header from "../../common/Header/Header";
import InThePress from "../../common/InThePress/InThePress";
import roomPhoto from "/img/86ec4070fa250138f07d1eb7c08f0304.jpg";
import diningRoom from "/img/the-wellhall-room-1.png";
import bathRoom from "/img/the-wellhall-room-2.png";

const Home = () => {
    const aboutUsRef = useRef(null);

    const scrollToAboutUs = () => {
        aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <section className="home__banner">
                <p className="home__banner-text">WELCOME TO</p>
                <div className="home__banner-content">
                    <h2 className="home__banner-title">The Wellhall</h2>
                    <p className="home__banner-subtitle">Resort & Spa Hotel</p>
                </div>
                <div className="home__banner-actions">
                    <button className="home__banner-button" onClick={scrollToAboutUs}>
                        LEARN MORE
                    </button>
                </div>
            </section>
            <Header />
            <AboutUs ref={aboutUsRef} />

            <div className="room">
                <div className="room__info">
                    <h2 className="room__title">The Family <br /> Suite</h2>
                    <p className="room__description">
                        Showcase the best your property has to offer by highlighting one of your accommodations.
                        Add a flattering photo, then describe the room's best feature.
                    </p>
                </div>
                <div className="room__media">
                    <div className="room__image-wrapper">
                        <img className="room__image" src={roomPhoto} alt="Family Suite" />
                        <div className="room__caption">
                            <p className="room__caption-text">
                                An intriguing caption that describes the room goes here.
                                <br />
                                Use a flattering photo, then describe away!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <div className="gallery__container">
                    <div className="gallery__item">
                        <img className="gallery__image" src={diningRoom} alt="Gallery Image 1" />
                    </div>
                    <div className="gallery__caption">
                        <p className="gallery__text">
                            An intriguing caption that describes the room goes here.
                            Use a flattering photo, then describe away!
                        </p>
                    </div>
                </div>
                <div className="gallery__container gallery__container--highlighted">
                    <div className="gallery__item">
                        <img className="gallery__image gallery-image--highlighted" src={bathRoom} alt="Gallery Image 2" />
                    </div>
                    <div className="gallery__caption">
                        <p className="gallery__text">
                            An intriguing caption that describes the room goes here.
                            Use a flattering photo, then describe away!
                        </p>
                    </div>
                </div>
            </div>
            <InThePress />
        </>
    );
};

export default Home;
