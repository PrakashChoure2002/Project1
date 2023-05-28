import React from "react";
import vg from "../assets/images3.png";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home" id="Home">
                <main>
                    <h1>Sky Techno</h1>
                    <p>The Solution Of  All Problem .... </p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphic" />
                <div>
                    <p>
                        The only way to fix this problem is by creating segregation and specialization in the early stages of learning. Instead of bombarding students with all-thing-technology, if we are able to bifurcate the fields early on, we can produce more skilled talent and achieve higher efficiency from them

                    </p>
                </div>

            </div>
            <div className="home3" id="About US">
                <div>
                    <h1>Who Are You</h1>

                    <p>
                        Insight is committed to serving as a good corporate citizen. This means conducting business with integrity, avoiding corruption of all kinds and reducing our impact on the environment.We firmly believe technology inspires the spirit of togetherness, and well continue to explore new innovations in technology with integrity and thoughtfulness at the heart of everything we do. See how were doing good.

                    </p>
                </div>
            </div>
            <div className="home4" id="Brands">
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: "0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>

                        </div>
                        <div
                            style={{
                                animationDelay: "0.5s",
                            }}
                        >
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "0.7s",
                            }}
                        >
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div
                            style={{
                                animationDelay: "1s",
                            }}
                        >
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>


                    </article>
                </div>

            </div>
        </>
    )
}

export default Home
