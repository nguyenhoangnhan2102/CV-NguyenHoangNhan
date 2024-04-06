import React from "react";
import './Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer_container">
                <div className="container">
                    <div className="row">
                        <div className="footer col-12">
                            <p>Copyright &copy; 2024 a hugo theme by NguyenHoangNhan</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;