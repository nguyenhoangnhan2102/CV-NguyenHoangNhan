import React from "react";
import './Home.scss';
import './HomeResponsive.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

class Home extends React.Component {
    render() {
        return (
            <div className="container_home">
                <div className="container">
                    <div className="row_top ">
                        <div className="my_name" data-aos="fade-right" data-aos-duration="2000">
                            <p data-text="Hey, I'm Nguyen Hoang Nhan !">Hey, I'm Nguyen Hoang Nhan !</p>
                        </div>
                        <div className="my_major" data-aos="fade-right" data-aos-duration="2000">
                            <p>A Web Developer</p>
                        </div>
                    </div>
                    <div className="row_bottom">
                        <div className="avatar" data-aos="fade-up" data-aos-duration="2000">
                            <img src="../img/(1).jpg" />
                        </div>
                        <div className="my_style" data-aos="fade-up" data-aos-duration="2000">
                            <p>I am a young Web Developer, born in 2003.
                                I am nurturing the dream of becoming a professional Web Developer!!!
                            </p>
                        </div>
                    </div>
                </div>
                <div id="education">

                </div>
            </div>
        )
    }
}

export default Home;