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
                    <div className="fruitContent">
                        <h1>Graphic Design</h1>
                        <p>Great design makes you memorable. We deliver <br /> artwork that underscores your brand message <br /> and captures potential clients´ attention.</p>
                    </div>
                    <img src="src\assets\LandingPageFruits\images\desktop\image-graphic-design.jpg" alt="Transform" />
                </div>
                <div className="columnSix">
                    <div className="fruitContent">
                        <h1>Photography</h1>
                        <p>Increase your creadibility by getting the most <br /> stunning, high-quality photos that improve your <br /> business image.</p>
                    </div>
                    <img src="src\assets\LandingPageFruits\images\desktop\image-photography.jpg" alt="Transform" />
                </div>
            </section>

            <section className="testimonials">

                <h1>CLIENT TESTIMONIALS</h1>

                <div className="persons">
                    <div className="person">
                        <div className="imgPerson">
                            <img src="src\assets\LandingPageFruits\images\image-emily.jpg" alt="" />
                        </div>
                        <p>We put our trust in Sunnyside and they <br /> delivered, making sure our needs were met <br /> and deadlines were always hit.</p>

                        <div className="autor">
                            <h3>Emily R.</h3>
                            <h4>Marketing Director</h4>
                        </div>
                    </div>
                    <div className="person">
                        <div className="imgPerson">
                            <img src="src\assets\LandingPageFruits\images\image-thomas.jpg" alt="" />
                        </div>
                        <p>Sunnyside´s enthusiasm coupled with their <br /> keen interest in our brand´s success made it <br /> a satisfying and enjoyable experience.</p>
                        <div className="autor">
                            <h3>Thomas S.</h3>
                            <h4>Chief Operating Officer</h4>
                        </div>
                    </div>
                    <div className="person">
                        <div className="imgPerson">
                            <img src="src\assets\LandingPageFruits\images\image-jennie.jpg" alt="" />
                        </div>
                        <p>Incredible end result! Our sakes increased <br /> over 400% when we worked with Sunnyside. <br /> Highly recommended!</p>
                        <div className="autor">
                            <h3>Jennie F.</h3>
                            <h4>Business Owner</h4>
                        </div>
                    </div>
                </div>
            </section>


            <section className="gallery">
                <img src="src\assets\LandingPageFruits\images\desktop\image-gallery-milkbottles.jpg" alt="" />
                <img src="src\assets\LandingPageFruits\images\desktop\image-gallery-orange.jpg" alt="" />
                <img src="src/assets/LandingPageFruits/images/desktop/image-gallery-cone.jpg" alt="" />
                <img src="src/assets/LandingPageFruits/images/desktop/image-gallery-sugarcubes.jpg" alt="" />
            </section>

            <footer>
                <h1>sunnyside</h1>
                <div className="buttonsFooter">
                    <button>About</button>
                    <button>Services</button>
                    <button>Projects</button>
                </div>
                <div className="iconsFooter">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/LandingPageFruits/images/icon-facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/LandingPageFruits/images/icon-instagram.svg" alt="Instagram" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/LandingPageFruits/images/icon-twitter.svg" alt="Twitter" />
                    </a>
                    <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                        <img src="src/assets/LandingPageFruits/images/icon-pinterest.svg" alt="Pinterest" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default LandingPageFruits
