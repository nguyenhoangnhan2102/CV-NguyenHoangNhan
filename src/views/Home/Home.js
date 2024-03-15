import React from "react";
import './Home.scss';

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="container_home" id="home">
                    <div className="container_row_top">
                        <div className="my_name">Hey, I'm Nguyen Hoang Nhan !</div>
                        <div className="my_majors">A Web Developer</div>
                    </div>
                    <div className="container_row_bottom">
                        <div className="my_face">
                            <img src="../img/(1).jpg" />
                        </div>
                        <div className="my_style">
                            Tôi có ước mơ trở thành lập trình. Mặc dù bản thân còn nhiều thiếu xót nhưng
                            tôi đang cố gắng từng ngày để hoàn thành ước mơ!!!
                        </div>
                    </div>
                    <hr id="about"></hr>
                </div>

            </>
        )
    }
}

export default Home;