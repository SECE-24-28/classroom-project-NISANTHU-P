import React from 'react';
import { GlanceStyle } from './glance-style.js';
const GlanceComponent=()=>{
    return (
        <GlanceStyle>
                <div className="atglance">
                    <p className='title'>Impact at <span className="glance">Glance</span></p>
                    <div className="ele-1">
                        <div className="colleges">
                            <div className='box'>
                                <p className="details">Colleges</p>
                                <p className="value">100+</p>
                            </div>
                            <img src="https://www.aptitudeguruhem.com/static/media/school.534dd7db3daaf4c66eff.png" alt="college.image" />
                        </div>
                        <div className="students">
                            <div className="box">
                                <p className="details">Students</p>
                                <p className="value">1,00,000</p>
                            </div>
                            <img src="https://www.aptitudeguruhem.com/static/media/bag.52185bac9246c85ed48f.png" alt="students.image" />
                        </div>
                    </div>
                    <div className="ele-2">
                        <div className="studymaterials">
                            <div className="box">
                                <p className="details">Study Materials</p>
                                <p className="value">1000+</p>
                            </div>
                            <img src="https://www.aptitudeguruhem.com/static/media/books.d290f0589bd8ed867b77.png" alt="study.image" />
                        </div>
                        <div className="professionaltrainers">
                            <div className="box">
                                <p className="details">Professional Trainers</p>
                                <p className="value">150</p>
                            </div>
                            <img src="https://www.aptitudeguruhem.com/static/media/people.0b6f76ebbf0b209884e7.png" alt="" />
                        </div>
                    </div>
                </div>
        </GlanceStyle>
    );
}
export default GlanceComponent;