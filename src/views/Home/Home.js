import React from "react";
import './Home.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
    render() {
        return (
            <div className="top_container" >
                <div className="container" id="home">
                    <div className="row">
                        <div className="content_left col-5">
                            <p>Hi, I'm Nguyen Hoang Nhan !</p>
                            <br />
                            <h4>A Web Developer</h4>
                        </div>
                        <div className="content_right col-7">
                            <div className="khung">
                                <img src="../img/(1).jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;