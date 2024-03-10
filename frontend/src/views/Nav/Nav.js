import React from "react";
import './Nav.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav" id="nav">
                <div className="nav-pc">
                    <a href="#home" className="active">TRANG CHỦ</a>
                    <a href="#info">THÔNG TIN</a>
                    <a href="#study">HỌC TẬP</a>
                    <a href="#skill">KỸ NĂNG</a>
                    <a href="#another">KHÁC</a>
                    {/* <div className="dropdown">
                        <button className="dropbtn">KHÁC
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div> */}
                </div>
                <label htmlFor="show-nav-mobile" className="nav-btn">
                    <img src="../img/bars.png" />
                </label>

                <input type="checkbox" hidden className="nav-input" name="" id="show-nav-mobile" />

                <label htmlFor="show-nav-mobile" className="nav-overlay"></label>

                <div className="nav-mobile">
                    <a href="#home" className="active">TRANG CHỦ</a>
                    <a href="#info">THÔNG TIN</a>
                    <a href="#study">HỌC TẬP</a>
                    <a href="#skill">KỸ NĂNG</a>
                    <a href="#another">KHÁC</a>
                    {/* <div className="dropdown-mobile">
                        <button className="dropbtn-mobile">KHÁC
                        </button>
                        <div className="dropdown-content-mobile">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Nav;