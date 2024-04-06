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
                            <p>Let’s talk about yourself and
                                if you have any questions about me, please shoot
                                me a message at nhnhan2102@gmail.com
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
                                    <p>Soc That Province, Village Nguyet Hoa,
                                        District Chau Thanh, Tra Vinh Province
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