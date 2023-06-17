import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"

const Home=()=>{

    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Graphics" />

                <div>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Iure velit vero quasi molestiae, necessitatibus sunt quos repellat natus
                        asperiores temporibus accusantium veniam provident aperiam tempora id rerum labore? 
                        Maiores, culpa!
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sequi saepe ullam esse optio quae aperiam, vel totam aspernatur beatae tenetur soluta aut a distinctio iste vitae minus dolores laudantium.
                    </p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{animationDelay:"0.3s"}}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>
                        <div style={{animationDelay:"0.5s"}}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>
                        <div style={{animationDelay:"0.7s"}}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                        <div style={{animationDelay:"1s"}}>
                            <AiFillYoutube/>
                            <p>Youtube</p>
                        </div>
                    </article>
                </div>
            </div>

        </>
      
    )
}

export default Home;