import React from "react";
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer_container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            Copyright &copy; 2024 a hugo theme by NguyenHoangNhan
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;