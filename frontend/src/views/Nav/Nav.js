import React from "react";
import './Nav.css';
class Nav extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="navbar">
                    <ul>
                        <li><a href="#home">TRANG CHỦ</a></li>
                        <li><a href="#news">THÔNG TIN</a></li>
                        <li><a href="#news">SỞ THÍCH</a></li>
                        <li className="dropdown">
                            <a href="#" className="dropbtn">KHÁC</a>
                            <div className="dropdown-content">
                                <a href="#1">Link 1</a>
                                <a href="#2">Link 2</a>
                                <a href="#3">Link 3</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;