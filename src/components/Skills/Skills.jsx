import React from 'react';

const Skills = () => {
    return (
        <div className='max-w-7xl mx-auto mb-20'>
            <h2 className='text-center text-5xl mb-8 uppercase bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'>Skills</h2>
            <div>
                <h3 className='text-6xl mb-8 uppercase bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent'>Expertise: </h3>
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
            <div>
                <h3 className='text-6xl mb-8 uppercase bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent'>Comfortable: </h3>
                <div className='flex gap-6 justify-start mb-12'>
                    <button className="btn btn-accent">Express js</button>
                    <button className="btn btn-secondary">MongoDB</button>
                </div>
            </div>
            <div>
                <h3 className='text-6xl mb-8 uppercase bg-gradient-to-r from-red-900 to-red-500 bg-clip-text text-transparent'>Familiar: </h3>
                <div className='flex gap-6 justify-start mb-12'>
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