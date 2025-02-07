import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});

const Skills = () => {
    return (
        <div id='skills' className='max-w-7xl mx-auto mb-20 px-6 md:px-0'>
            <h2 className='text-center md:text-5xl text-3xl mb-8 uppercase bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'>Skills</h2>
            <div data-aos="fade-right" data-aos-duration="500">
                <h3 className='lg:text-6xl text-2xl mb-8 uppercase bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent'>Expertise: </h3>
                <div className='flex flex-wrap gap-6 justify-start mb-12'>
                    <button className="btn btn-success">HTML</button>
                    <button className="btn btn-primary">CSS</button>
                    <button className="btn btn-secondary">Boostrap</button>
                    <button className="btn btn-accent">Tailwind</button>
                    <button className="btn btn-success">Firebase</button>
                    <button className="btn btn-info">React js</button>
                    <button className="btn btn-warning">React Boostrap</button>
                    <button className="btn btn-error">Daisy Ui</button>
                    <button className="btn btn-info">React Router</button>
                    <button className="btn btn-primary">React Hook Form</button>
                    <button className="btn btn-secondary">javaScritp</button>
                    <button className="btn btn-accent">ES6</button>
                    <button className="btn btn-warning">Rest Apis</button>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-duration="500">
                <h3 className='md:text-6xl text-2xl mb-8 uppercase bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent'>Comfortable: </h3>
                <div className='flex flex-wrap gap-6 justify-start mb-12'>
                    <button className="btn btn-accent">Express js</button>
                    <button className="btn btn-info">Node js</button>
                    <button className="btn btn-secondary">MongoDB</button>
                </div>
            </div>
            <div data-aos="fade-right" data-aos-duration="500">
                <h3 className='md:text-6xl text-2xl mb-8 uppercase bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent'>Familiar: </h3>
                <div className='flex flex-wrap gap-6 justify-start mb-12'>
                    <button className="btn btn-secondary">JWT</button>
                    <button className="btn btn-primary">React Query</button>
                    <button className="btn  btn-success">TanStack Query</button>
                    <button className="btn btn-accent">Axios</button>
                </div>
            </div>
        </div>
    );
};

export default Skills;