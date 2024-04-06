import React from "react";
import './Home.scss';
import './HomeResponsive.scss';

class Home extends React.Component {
    render() {
        return (
            <div className="container_home">
                <div className="container">
                    <div className="row_top ">
                        <div className="my_name">
                            <p>Hey, I'm Nguyen Hoang Nhan !</p>
                        </div>
                        <div className="my_major ">
                            <p>A Web Developer</p>
                        </div>
                    </div>
                    <div className="row_bottom">
                        <div className="avatar">
                            <img src="../img/(1).jpg" />
                        </div>
                        <div className="my_style">
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