import React from "react";
import './Nav.css';
class Nav extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="navbar">
                    <ul className="nav-pc">
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
                        <div className="bar-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Nav;