import React from "react";
import './Contact.scss';
import './ContactResponsive.scss';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact_container">
                <div className="container">
                    <div className="contact_row row">
                        <div className="contact_left" data-aos="fade-right" data-aos-duration="2000">
                            <div className="contact_title">
                                <h2>Contact Me</h2>
                                <div className="form_contact">
                                    <form>
                                        <div className="info" data-aos="fade-right" data-aos-duration="1500">
                                            <label className="">Your Name</label>
                                            <input placeholder="Your Name" />
                                        </div>
                                        <div className="info" data-aos="fade-left" data-aos-duration="1500">
                                            <label >Your Email</label>
                                            <input placeholder="Your Email" />
                                        </div>
                                        <div className="info" data-aos="fade-up" data-aos-duration="1500">
                                            <label>Your Message</label>
                                            <input className="message" placeholder="Your Message" />
                                        </div>
                                        <div className="btn_contact" data-aos="fade-right" data-aos-duration="1800">
                                            <button>Send Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="contact_right" data-aos="fade-left" data-aos-duration="1500">
                            <h2>Get in Touch</h2>
                            <p data-aos="fade-up" data-aos-duration="1500">
                                Let’s talk about yourself and
                                if you have any questions about me, please shoot
                                me a message at nhnhan2102@gmail.com
                            </p>
                            <div className="icon_row row" data-aos="fade-up" data-aos-duration="2000">
                                <div className="icon">
                                    <img src="../img/email.webp" />
                                    <p>
                                        nhnhan2102@gmail.com
                                    </p>
                                </div>
                                <div className="icon" data-aos="fade-up" data-aos-duration="2000">
                                    <img src="../img/phone.webp" />
                                    <p>
                                        0987863073
                                    </p>
                                </div>
                                <div className="icon" data-aos="fade-up" data-aos-duration="2000">
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