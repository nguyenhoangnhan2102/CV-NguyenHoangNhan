import React from "react";
import './Contact.scss';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact_container">
                <div className="container">
                    <div className="row">
                        <div className="contact_left col-6">
                            <div className="contact_title col-12">
                                <h2>Contact Me</h2>
                                <div className="form_contact col-12">
                                    <form>
                                        <div className="info row mb-3">
                                            <label className="">Your Name</label>
                                            <input className="col-12" placeholder="Your Name" />
                                        </div>
                                        <div className="info row mb-3">
                                            <label className="">Your Email</label>
                                            <input className="col-12" placeholder="Your Email" />
                                        </div>
                                        <div className="info row mb-3">
                                            <label className="">Your Message</label>
                                            <input className="message col-12" placeholder="Your Message" />
                                        </div>
                                        <div className="row">
                                            <button>Send Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="contact_right col-5">
                            <h2>Get in Touch</h2>
                            <p>Let’s talk about your project and
                                how I can help you or if you just want to chat about design and art - shoot
                                me a message at abcxmple@gmail.com
                            </p>
                            <div className="row">
                                <div className="icon d-flex col-12">
                                    <img src="../img/email.webp" />
                                    <p className="ml-3">
                                        nhnhan2102@gmail.com
                                    </p>
                                </div>
                                <div className="icon d-flex col-12">
                                    <img src="../img/phone.webp" />
                                    <p className="ml-3">
                                        0987863073
                                    </p>
                                </div>
                                <div className="icon d-flex col-12">
                                    <img src="../img/address.webp" />
                                    <p className="ml-3">Ấp Sóc Thát, xã Nguyệt Hóa,
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