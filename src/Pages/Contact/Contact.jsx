import ContactUs from '../../assets/Images/google-contacts.png'
import Fb from '../../assets/Images/facebook.png'
import Web from '../../assets/Images/internet.png'
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Contact = () => {
    return (
        <div className="container my-5">
            <h2 className="fw-bolder">Contact Us</h2>
            <div className="row">
                <div className="col-7">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0068835731117!2d89.53134817587676!3d22.802208824514718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff85490c50d28f%3A0xadae6f7b93b7069a!2sKhulna%20University!5e0!3m2!1sen!2sbd!4v1721140003412!5m2!1sen!2sbd"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded"
                    ></iframe>
                </div>
                <div className="col-5" >
                    <div className="card py-5 align-items-center justify-content-center" style={{ height: "400px" }}>
                        <img src={ContactUs} alt="Payment" height={80} width={80} className="mb-3" />
                        <div className="text-center">
                            <h6 className='py-1'><span className='fw-bolder'>PRESIDENT:</span> 01300000000</h6>
                            <h6 className='py-1'><span className='fw-bolder'>SECRETARY:</span> 01300000000</h6>
                            <h6 className='py-1'><span className='fw-bolder'>TREASURER:</span> 01300000000</h6>
                            <h6 className='py-1'><span className='fw-bolder'>Email:</span> INFO@KUMAA.ORG</h6>
                            <div className='gx-2 d-flex align-items-center my-2'>
                                <h6 className='fw-bolder'>Social Link:</h6>
                                <Link to='http://www.kumaa.org/' target='blank'><img src={Web} alt="website-link" height={28} width={28} className='m-1' /></Link>
                                <Link to='https://www.facebook.com/Khulna-University-Mathematics-Alumni-Association-105277714962590' target='blank'><img src={Fb} alt="facebook-link" height={28} width={28} className='m-1' /></Link>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div className='row my-5 shadow-lg rounded p-3 py-5'>
                <Form>
                    <FloatingLabel
                        controlId="name"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Enter your name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="email"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="subject"
                        label="Subject"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="subject" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form>
            </div>
        </div>
    );
};

export default Contact;