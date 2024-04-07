import React from "react";
import './Nav.scss';

class Nav extends React.Component {
    render() {
        return (
            <div className="container_nav" >
                <div className="nav_row">
                    <div className="nav_left">
                        <a href="#home" className="navbar_item">Hoang Nhan</a>
                    </div>
                    <div className="nav_right">
                        <a href="#home" className="navbar_item">Home</a>
                        <a href="#education" className="navbar_item">Education</a>
                        <a href="#skill" className="navbar_item">Skill</a>
                        <a href="#contact" className="navbar_item">Contact</a>
                    </div>
                </div>
                <label htmlFor="show-nav-mobile" className="nav-btn">
                    <img src="../img/bars.png" />
                </label>

                <input type="checkbox" hidden className="nav-input" name="" id="show-nav-mobile" />

                <label htmlFor="show-nav-mobile" className="nav-overlay"></label>
                <div className="nav_mobile">
                    <a href="#home" className="active">Home</a>
                    <a href="#education">Education</a>
                    <a href="#skill">Skill</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>


        )
    }
}

export default Nav;