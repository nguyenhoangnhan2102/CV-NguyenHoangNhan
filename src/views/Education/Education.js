import React from "react";
import './Eduction.scss';

class Education extends React.Component {
    render() {
        return (
            <div className="education_container">
                <div className="container">
                    <div className="row">
                        <div className="education_left col-3">
                            <h1>HỌC VẤN</h1>
                        </div>
                        <div className="education_right col-5">
                            <div className="row justify-content-around ">
                                <div className="title col-6">
                                    <h4>Trường TH Long Đức C</h4>
                                    <p>
                                        2003-2024
                                    </p>
                                    <hr />
                                </div>
                                <div className="title col-6">
                                    <h4>Trường THCS Lý Tự Trọng</h4>
                                    <p>
                                        2003-2024
                                    </p>
                                    <hr />
                                </div>
                                <div className="title col-6">
                                    <h4>Trường THPT Phạm Thái Bường</h4>
                                    <p>
                                        2003-2024
                                    </p>
                                    <hr />
                                </div>
                                <div className="title col-6">
                                    <h4>Trường Đại học Trà Vinh</h4>
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
            </div>
        )
    }

}

export default Education;