import React from "react";
import './Nav.scss';
import { Navbar } from "react-bootstrap";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
class Nav extends React.Component {
    render() {
        return (
            <div className="contaier_nav" >
                <div className="nav_row">
                    <div className="nav_left">
                        <a >
                            <img src="../img/hehe.png" />
                        </a>
                        <p href="#img">
                            HOÀNG NHÂN
                        </p>
                    </div>
                    <div className="nav_right">
                        <a href="#home" className="active">Trang chủ</a>
                        <a href="#about">Thông tin</a>
                        <a href="#skill">Kỹ năng</a>
                        <a href="#contact">Liên hệ</a>
                    </div>
                </div>
                <label htmlFor="show-nav-mobile" className="nav-btn">
                    <img src="../img/bars.png" />
                </label>

                <input type="checkbox" hidden className="nav-input" name="" id="show-nav-mobile" />

                <label htmlFor="show-nav-mobile" className="nav-overlay"></label>
                <div className="nav_mobile">
                    <a href="#home" className="active">Trang chủ</a>
                    <a href="#about">Thông tin</a>
                    <a href="#skill">Kỹ năng</a>
                    <a href="#contact">Liên hệ</a>
                </div>
            </div>
        )
    }
}

export default Nav;