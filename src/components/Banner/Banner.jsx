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
        <div className='max-w-7xl mx-auto py-20'>
            <div className='flex justify-between items-center'>
                <div className='w-2/3'>
                    <h3 className='text-5xl font-bold mb-5'>Hi, I am</h3>
                    <h3 className='text-5xl font-bold mb-5'>Rayhan Ali</h3>
                    <span className='text-5xl uppercase bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent' ref={el} />
                </div>
                <div className='w-1/3'>
                    <img className='rounded-xl' src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;