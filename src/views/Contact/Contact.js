import React from "react";
import './Contact.scss';

class Contact extends React.Component {
    render() {
        return (
            <div className="contact_container">
                <div className="row">
                    <div className="contact_left col-6">
                        <div className="contact_title col-12">
                            <h2>Contact Me</h2>
                        </div>
                        <div className="form_contact col-12">
                            <form>
                                <div className="info">
                                    <label>Your Name</label>
                                    <input placeholder="Your Name" />
                                </div>
                                <div className="info">
                                    <label>Your Email</label>
                                    <input placeholder="Your Name" />
                                </div>
                                <div className="info">
                                    <label>Your Message</label>
                                    <input placeholder="Your Name" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="contact_right col-6">
                        Get in Touch
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;