import React from 'react';
import { FaPhone, FaEnvelope, FaLocationDot, FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='max-w-7xl mx-auto px-6 md:px-0'>
            <h2 className='text-center md:text-5xl text-3xl mb-8 uppercase bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'>Contact Me</h2>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='w-full md:w-1/3'>
                    <h2 className='text-3xl text-center md:text-left mb-6 uppercase bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'>Address</h2>
                    <div className='flex gap-3 items-center'>
                        <FaLocationDot className='my-2 w-5 h-5'></FaLocationDot>
                        <Link className='text-lg' to="https://goo.gl/maps/WDMPknQtS2j59Bew5">Gazipur Dhaka Banlgadesh</Link>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaPhone className='my-2 text-center w-5 h-5'></FaPhone>
                        <Link className='text-lg' to="tel:+8801742903470">+8801742903470</Link>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaEnvelope className='my-2 w-5 h-5'></FaEnvelope>
                        <Link className='text-lg' to="mailto:rayhanalidev@gmail.com">rayhanalidev@gmail.com</Link>
                    </div>

                    <h2 className='text-3xl mt-20 text-center md:text-left uppercase bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'>Follow Me</h2>
                    <div className='flex gap-6 mt-4 justify-center md:justify-start'>
                        <Link to={`https://www.facebook.com/rayhanalidev/`}><FaFacebookF className='w-6 h-6'></FaFacebookF></Link>
                        <Link to={`https://www.linkedin.com/in/rayhanalidev/`}><FaLinkedinIn className='w-6 h-6'></FaLinkedinIn></Link>
                        <Link to={`https://github.com/Rayhanali-dev`}><FaGithub className='w-6 h-6'></FaGithub></Link>
                        <Link to={`https://twitter.com/rayhanalidev`}><FaTwitter className='w-6 h-6'></FaTwitter></Link>
                        <Link to={`https://www.instagram.com/rayhan_ali_dev/`}><FaInstagram className='w-6 h-6'></FaInstagram></Link>
                    </div>
                </div>
                <div className='w-full md:w-2/3'>
                    <h2 className='text-3xl text-center mt-11 md:mt-0 md:text-end mb-6 uppercase bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'>Get In Touch</h2>
                    <form>
                        <input type="text" required placeholder='Name' className='py-3 px-3 w-full md:w-[48%] mr-3 mb-6 md:mb-0' />
                        <input type="email" required placeholder='Email' className='py-3 px-3 w-full md:w-2/4' />
                        <textarea name="" id="" cols="30" className='mt-6 w-full py-3 px-3' placeholder='Tell me more about your needs...........' rows="10"></textarea>
                        <div className='text-center'>
                            <input className='btn btn-success my-4 text-center' type="submit" value="Send Message" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;