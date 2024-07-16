import Logo from "../../Components/Logo/Logo";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdEventBusy } from "react-icons/md";
import { RiSchoolLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="bg-dark" style={{ marginTop: '120px' }}>
            <div className="container">
                <div className="row d-flex flex-column flex-lg-row align-items-center py-5">
                    <div className="col-12 col-lg-4 d-flex align-items-center gap-3 mb-4 mb-lg-0">
                        <Logo />
                        <h3 className="text-white">Khulna University</h3>
                    </div>
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                        <nav className="text-white li-details">
                            <h5 className="text-bolder align-items-center">Quick Links</h5>
                            <ul className="list-unstyled ">
                                <div className="d-flex align-items-center text-li gap-1">
                                    <FaHome />
                                    <li className="my-1"> About</li>
                                </div>
                                <div>
                                    <div className="d-flex align-items-center text-li gap-1">
                                        <IoMdContact />
                                        <li className="">Apply For Membership</li>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center text-li gap-1">
                                    <MdEventBusy />
                                    <li className="my-1">Events</li>
                                </div>
                                <div className="d-flex align-items-center text-li gap-1">
                                    <IoMdContact />
                                    <li className="">Contact </li>
                                </div>
                                <div className="d-flex align-items-center text-li gap-1">
                                    <RiSchoolLine />
                                    <li className="my-1">Khulna University</li>
                                </div>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-12 col-lg-4">
                        <h5 className="text-white mb-2">Find us on Map</h5>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0068835731117!2d89.53134817587676!3d22.802208824514718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff85490c50d28f%3A0xadae6f7b93b7069a!2sKhulna%20University!5e0!3m2!1sen!2sbd!4v1721140003412!5m2!1sen!2sbd"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
