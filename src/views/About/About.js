import React from "react";
import './About.css';

class About extends React.Component {
    render() {
        return (
            <>
                <div className="title_about" id="about">
                    THÔNG TIN CÁ NHÂN
                </div>
                <div className="about" >
                    <div className="container_about_left">
                        <div className="name">
                            Họ & tên: Nguyễn Hoàng Nhân
                        </div>
                        <div className="age">
                            Ngày sinh: 21/02/2003 (21 tuổi)
                        </div>
                        <div className="address">
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
                            <p>Ghét:</p>
                            <span> Viết code, Hoàng Phúc</span>
                        </div>
                    </div>
                    <div className="container_about_right">
                        <div className="img_background">
                        </div>
                        <div className="img_about">
                            <img src="../img/What.jpg" />
                        </div>
                    </div>
                </div>
                <hr id="skill"></hr>
            </>
        )
    }
}

export default About;