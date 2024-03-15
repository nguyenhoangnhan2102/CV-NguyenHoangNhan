import React from "react";
import './Home.scss';

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="container_home" id="home">
                    <div className="container_row">
                        <div className="content_left">
                            <div className="my_name">My name is Nguyen Hoang Nhan, a Web Developer</div>
                            <div className="my_style">Tôi là một người không thích lập trình và HOÀNG PHÚC
                                nhưng vì tương lai phía trước nên tôi phải cố gắng từng ngày để không phụ công ơn
                                gia đình và bạn bè!!!
                            </div>
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