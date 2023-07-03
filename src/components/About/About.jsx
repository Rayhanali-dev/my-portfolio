import React from 'react';
import img from '../../assets/about.jpg'
const About = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center md:text-5xl px-6 md:px-0 text-3xl mb-8 uppercase bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'>About me</h2>
            <div className='md:py-20 py-5 flex px-6 flex-col md:flex-row items-center'>
                <div className='w-full md:w-1/2 mb-6 md:mb-0'>
                    <img className='rounded-xl' src={img} alt="about img" />
                </div>
                <div className='w-full md:w-1/2'>
                    <p className='text-2xl'>Hi, </p>
                    <p className='mb-7 leading-7 text-lg'>I'm  Rayhan Ali, a junior MERN stack developer with a strong passion for web development. I have completed a comprehensive MERN stack web development course and gained hands-on experience building interactive web applications. I am dedicated to continuous learning and staying updated with the latest trends in the field.</p>

                    <p className='mb-7 leading-7 text-lg'>With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I am capable of handling both front-end and back-end development. I prioritize clean and efficient code, adhering to best practices to deliver seamless user experiences. I thrive in collaborative environments, valuing effective communication and knowledge sharing.</p>

                    <p className='mb-7 leading-7 text-lg'> As a junior developer, I am eager to refine my coding skills, improve problem-solving abilities, and become a sought-after professional in web development. I am committed to continuous growth and actively seek new challenges to expand my knowledge and contribute to the advancement of the field. </p>

                    <p className='mb-7 leading-7 text-lg'>Thank you for taking the time to get to know me. I am excited to leverage my skills and enthusiasm to create innovative web solutions. Let's collaborate and create remarkable web experiences together!</p>
                </div>
            </div>
        </div>
    );
};

export default About;