import React from 'react';
import Typed from 'typed.js';
import bannerImg from '../../assets/favicon.jpg'

const Banner = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Designer', 'Web Developer', 'Mern Stack Developer', 'Front End Developer', 'React Developer'],
            typeSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <div id='banner' className='max-w-7xl mx-auto py-10 md:py-20 md:mt-12 mt-0 px-6 md:px-0'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-2/3 text-center md:text-left'>
                    <h3 className='md:text-6xl text-2xl font-bold mb-2 md:mb-5'>Hi, I am</h3>
                    <h3 className='md:text-6xl text-2xl font-bold mb-2 md:mb-5'>Rayhan Ali</h3>
                    <span className='md:text-6xl text-2xl uppercase bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent' ref={el} />
                </div>
                <div className='w-full md:w-1/3 mt-6 md:mt-0'>
                    <img className='rounded-xl w-full' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;