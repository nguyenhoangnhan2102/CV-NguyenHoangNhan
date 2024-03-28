import React from "react";
import './Nav.scss';

class Nav extends React.Component {
    render() {
        return (
            <div className="container_nav" >
                <div className="nav_row">
                    <div className="nav_left">
                        <a href="#home">Hoàng Nhân</a>
                    </div>
                    <div className="nav_right">
                        <a href="#home" className="active">Trang chủ</a>
                        <a href="#education">Học vấn</a>
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
                    <a href="#education">Học vấn</a>
                    <a href="#skill">Kỹ năng</a>
                    <a href="#contact">Liên hệ</a>
                </div>
            </div>


        )
    }
}

export default Nav;