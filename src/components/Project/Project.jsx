import React from 'react';
import summerCamp from '../../assets/summerCamp.png';
import toyZone from '../../assets/toyZone.png';
import foxeresto from '../../assets/foxeresto.png'

const Project = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <h2 className='text-center text-5xl uppercase bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'>Projects</h2>
            <div className='py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='h-[600px] p-6 group rounded-xl border-4 border-red-600'>
                    <img className='h-1/2 object-left-top duration-700 object-cover transform group-hover:object-bottom w-full' src={summerCamp} alt="" />
                    <h3>Project Name: Summer Camp</h3>
                </div>
            </div>
        </div>
    );
};

export default Project;