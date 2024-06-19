import React, { useRef } from 'react';
import "./LandingPageFruits.css";

const LandingPageFruits = () => {

    const informationFoodOneRef = useRef(null);

    const handleArrowClick = () => {
        informationFoodOneRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='landingpagefruits'>
            <section className="home">
                <header>
                    <h3 className="headerTitle">sunnyside</h3>
                    <div className="buttons">
                        <button>About</button>
                        <button>Services</button>
                        <button>Projects</button>
                        <button className="contactButton">Contact</button>
                    </div>
                </header>

                <div className="contentCenter">
                    <h1 className="mainTitle">WE ARE CREATIVES</h1>
                    <div className="arrowDown" onClick={handleArrowClick}></div>
                </div>
            </section>

            <section className="informationFoodOne" ref={informationFoodOneRef}>
                <div className="columnOne">
                    <div className="content">
                        <h1>Transform your <br /> brand</h1>
                        <p>We are a full-service creative agency specializing in <br /> helping brands grow fast. Engage your clients through <br /> compelling visuals that do most of the marketing for you.</p>
                        <div className="buttonLearnMore">
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div className="columnTwo">
                    <img src="src/assets/LandingPageFruits/images/desktop/image-transform.jpg" alt="Transform" />
                </div>
                <div className="columnThree">
                    <img src="src\assets\LandingPageFruits\images\desktop\image-stand-out.jpg" alt="Transform" />
                </div>
                <div className="columnFour">
                    <div className="content">
                        <h1>Stand out to the right  audience</h1>
                        <p>Using a collaborative formula of designers, researchers, <br /> photographers, videographers, and copywriters, we´ll<br /> build and extends your brand in digital places.</p>
                        <div className="buttonLearnMore">
                            <button>LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div className="columnFive">
                    <img src="src\assets\LandingPageFruits\images\desktop\image-graphic-design.jpg" alt="Transform" />

                </div>
                <div className="columnSix">
                    <img src="src\assets\LandingPageFruits\images\desktop\image-photography.jpg" alt="Transform" />
                </div>
            </section>

        </div>
    )
}

export default LandingPageFruits
