import React from "react";
import { OurCourseStyle } from "./our-course-style.js";

const OurCourseComponent = () => {
    return (
        <OurCourseStyle>
            <div className="component">
                <div className="ourcourse">
                    <div className="heading">
                        <h2 className="title">Our Courses</h2>
                        <p className="sub_title">Explore a wide range of curated courses for every learner. Structured to enhance knowledge, skills, and career growth.</p>
                    </div>
                    <div className="courses">
                        <div className="aptitude">
                            <img src="https://res.cloudinary.com/dotsjvnys/image/upload/v1715770719/AGH-Nov/HeroSection/aptitude_ch2mz0.jpg" alt="" />
                            <h2 className="course_name">Apitude Completion Preparation</h2>
                            <span className="details">
                                <div>Recomended: Final year students</div>
                                <div>Duration: 1 year</div>
                            </span>
                            <div className="amount">
                                <div className="now">12,000</div>
                                <span className="gst">+GST</span>
                                <div className="original">24,999</div>
                            </div>
                            <div className="buy">
                                <button className="Buy_Now">Buy Now</button>
                                <a href="">Know More</a>
                            </div>
                        </div>
                        <div className="techinical">
                            <img src="https://res.cloudinary.com/dotsjvnys/image/upload/v1715770721/AGH-Nov/HeroSection/programming_e05rx7.png" alt="" />
                            <h2 className="course_name">Techinical Completion Preparation</h2>
                            <span className="details">
                                <div>Recomended: Final year students</div>
                                <div>Duration: 1 year</div>
                            </span>
                            <div className="amount">
                                <div className="now">12,000</div>
                                <span className="gst">+GST</span>
                                <div className="original">24,999</div>
                            </div>
                            <div className="buy">
                                <button className="Buy_Now">Buy Now</button>
                                <a href="">Know More</a>
                            </div>
                        </div>
                        <div className="mern">
                            <img src="https://res.cloudinary.com/dotsjvnys/image/upload/v1715770718/AGH-Nov/HeroSection/web-development_bfpidr.png" alt="" />
                            <h2 className="course_name">Mern Fullstack</h2>
                            <span className="details">
                                <div>Recomended: Final year students</div>
                                <div>Duration: 1 year</div>
                            </span>
                            <div className="amount">
                                <div className="now">29,999</div>
                                <span className="gst">+GST</span>
                                <div className="original">39,999</div>
                            </div>
                            <div className="buy">
                                <button className="Buy_Now">Buy Now</button>
                                <a href="">Know More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OurCourseStyle>
    );
};

export default OurCourseComponent;