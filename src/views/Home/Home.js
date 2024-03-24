import React from "react";
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends React.Component {
    render() {
        return (
            <div className="container_home">
                <div className="container">
                    <div className="row_top d-block">
                        <div className="my_name col-12">
                            Hey, I'm Nguyen Hoang Nhan !
                        </div>
                        <div className="my_major col-12">
                            A Web Developer
                        </div>
                    </div>
                    <div className="row_bottom d-flex">
                        <div className="avatar col-2">
                            <img src="../img/(1).jpg" />
                        </div>
                        <div className="my_style col-10">
                            Một lập trình viên website tay mơ. Đang cố gắng từng ngày để không phụ công ơn nuôi dạy của gia đình và bạn bè!!!
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