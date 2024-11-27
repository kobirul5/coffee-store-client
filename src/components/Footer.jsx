import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-footer-img py-12 text-[#331A15] mt-20">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section */}
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold text-brown-700">Espresso Emporium</h1>
                    <p className="mt-4 text-gray-700">
                        Always ready to be your friend. Come & Contact with us to share your
                        memorable moments, to share with your best companion.
                    </p>
                    <h1 className="text-3xl font-bold text-brown-700 mt-4">Get in Touch</h1>
                    <div className="flex justify-center md:justify-start space-x-4 mt-6">
                        <FaFacebook className="text-2xl text-[#331A15] hover:text-blue-600 cursor-pointer" />
                        <FaTwitter className="text-2xl text-[#331A15] hover:text-blue-400 cursor-pointer" />
                        <FaInstagram className="text-2xl text-[#331A15] hover:text-pink-500 cursor-pointer" />
                        <FaLinkedin className="text-2xl text-[#331A15] hover:text-blue-700 cursor-pointer" />
                    </div>
                    <div className="mt-6 space-y-4 text-[#331A15]">
                        <div className="flex items-center space-x-2">
                            <FaPhone className="text-xl text-[#331A15]" />
                            <span>+88 01533 333 333</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaEnvelope className="text-xl text-[#331A15]" />
                            <span>info@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaMapMarkerAlt className="text-xl text-[#331A15]" />
                            <span>72, Wall Street, King Road, Dhaka</span>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-brown-700 text-center md:text-left ">
                        Connect with Us
                    </h2>
                    <form className="mt-6 space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full"
                        />
                        <textarea
                            placeholder="Message"
                            className="textarea textarea-bordered w-full"
                            rows="4"
                        ></textarea>
                        <button className="btn btn-primary w-full">Send Message</button>
                    </form>
                </div>
            </div>
            <footer className="text-center mt-12 text-gray-600 text-sm">
                Copyright © Espresso Emporium | All Rights Reserved
            </footer>
        </div>
    );
};

export default Footer;