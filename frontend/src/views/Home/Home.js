import React from "react";
import './Home.css';

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="container_top">
                    <div className="container" id="home">
                        <div className="content_left">
                            <p className="my_name">I'm Nguyen Hoang Nhan, a Web Developer.</p>
                            <p className="my_style">Tôi là một người bình thường, không có sở thích lập trình web cũng như lập trình nhưng vì tương lai sau này nên
                                vẫn cố gắng học tập từng ngày để không phụ lòng công ơn gia đình và bạn bè!!!
                            </p>
                        </div>
                        <div className="content_right">
                            <img src="../img/(1).jpg" />
                        </div>
                    </div>
                    <hr id="about"></hr>
                </div>
            </>
        )
    }
}

export default Home;