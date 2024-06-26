import React from "react";
import './Education.scss';
import './EducationResponsive.scss';

class Education extends React.Component {
    render() {
        return (
            <div className="education_container">
                <div className="container">
                    <div className="education_row">
                        <div className="education_left" data-aos="fade-right" data-aos-duration="2000">
                            <h1>Education</h1>
                        </div>
                        <div className="education_right">
                            <div className="row justify-content-around">
                                <div className="title" data-aos="zoom-in-down" data-aos-duration="1600">
                                    <h4>Long Duc C Primary School</h4>
                                    <p>
                                        2003-2024
                                    </p>
                                    <hr />
                                </div>
                                <div className="title" data-aos="zoom-in-down" data-aos-duration="2000">
                                    <h4>Ly Tu Trong Junior High School</h4>
                                    <p>
                                        2003-2024
                                    </p>
                                    <hr />
                                </div>
                                <div className="title" data-aos="zoom-in-down" data-aos-duration="2500">
                                    <h4>Pham Thai Buong High School</h4>
                                    <p>
                                        2003-2024
                                    </p>
                                    <hr />
                                </div>
                                <div className="title" data-aos="zoom-in-down" data-aos-duration="3000">
                                    <h4>Tra Vinh University School</h4>
                                    <p>
                                        2003-2024
                                    </p>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="skill"></div>
            </div >
        )
    }

}

export default Education;