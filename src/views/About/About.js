import React from "react";
import './About.scss';

class About extends React.Component {
    render() {
        return (
            <>
                <div className="container_about">
                    <div className="about_row" >
                        <div className="container_about_left">
                            <div className="title_about" id="about">
                                THÔNG TIN CÁ NHÂN
                            </div>
                            <div className="about">
                                Họ & tên: Nguyễn Hoàng Nhân
                            </div>
                            <div className="about">
                                Ngày sinh: 21/02/2003 (21 tuổi)
                            </div>
                            <div className="about">
                                Quê quán: Trà Vinh
                            </div>
                            <div className="favourite">
                                <div className="favourite_content">Sở thích:</div>
                                <div className="favourite_icon">
                                    <img src="../img/icons8-game-controller-100.png" />
                                    <img src="../img/icons8-reading-book-64.png" />
                                    <img src="../img/edit-video-64.png" />
                                </div>
                            </div>
                            <div className="dislike">
                                <div className="dislike_title">Ghét:</div>
                                <div className="dislike_content">Viết code, Hoàng Phúc</div>
                            </div>
                        </div>
                        <div className="container_about_right">
                            <img src="../img/What.jpg" />
                        </div>
                    </div>
                    <hr id="skill"></hr>
                </div >
            </>
        )
    }
}

export default About;