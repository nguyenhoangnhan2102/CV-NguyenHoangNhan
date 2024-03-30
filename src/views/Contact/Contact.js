import React from "react";
import './Contact.scss';
import './ContactResponsive.scss';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact_container">
                <div className="container">
                    <div className="contact_row row">
                        <div className="contact_left">
                            <div className="contact_title">
                                <h2>Contact Me</h2>
                                <div className="form_contact">
                                    <form>
                                        <div className="info ">
                                            <label className="">Your Name</label>
                                            <input placeholder="Your Name" />
                                        </div>
                                        <div className="info ">
                                            <label >Your Email</label>
                                            <input placeholder="Your Email" />
                                        </div>
                                        <div className="info ">
                                            <label>Your Message</label>
                                            <input className="message" placeholder="Your Message" />
                                        </div>
                                        <div className="btn_contact">
                                            <button>Send Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="contact_right">
                            <h2>Get in Touch</h2>
                            <p>Let’s talk about your project and
                                how I can help you or if you just want to chat about design and art - shoot
                                me a message at abcxmple@gmail.com
                            </p>
                            <div className="icon_row row">
                                <div className="icon">
                                    <img src="../img/email.webp" />
                                    <p>
                                        nhnhan2102@gmail.com
                                    </p>
                                </div>
                                <div className="icon">
                                    <img src="../img/phone.webp" />
                                    <p>
                                        0987863073
                                    </p>
                                </div>
                                <div className="icon">
                                    <img src="../img/address.webp" />
                                    <p>Ấp Sóc Thát, xã Nguyệt Hóa,
                                        huyện Châu Thành, tỉnh Trà Vinh
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;