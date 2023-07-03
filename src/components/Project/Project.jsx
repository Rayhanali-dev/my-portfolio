import React from 'react';
import summerCamp from '../../assets/summerCamp.png';
import toyZone from '../../assets/toyZone.png';
import foxeresto from '../../assets/foxeresto.png'
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div className='max-w-7xl mx-auto px-6 md:px-0'>
            <h2 className='text-center lg:text-5xl text-3xl uppercase bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent'>Projects</h2>
            <div className='py-20 grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3'>
                <div className='p-4 group rounded-xl border-4 border-orange-400'>
                    <img className='h-80 object-left-top duration-700 object-cover transform group-hover:object-bottom w-full' src={summerCamp} alt="" />
                    <h3 className='text-2xl text-orange-400 mt-4'>Project Name: Summer Camp</h3>
                    <h3 className='font-lg text-orange-400 my-4 leading-7'>Technology: React || Firebase || React Router || MongoDB || Express Js || Tailwind || React Hook Form || Axios || JWT || daisiUi</h3>
                    <div className='text-center'>
                        <Link className='btn btn-secondary' to={`https://summer-camp-a2da2.web.app/`}>Live Site</Link>
                        <Link className='btn btn-info mx-2 my-3 md:my-0' to={`https://github.com/Rayhanali-dev/sports-camp-client`}>Client Side</Link>
                        <Link className='btn btn-success' to={`https://github.com/Rayhanali-dev/sports-camp-server`}>server Side</Link>
                    </div>
                </div>
                <div className='p-4 group rounded-xl border-4 border-orange-400'>
                    <img className='h-80 object-left-top duration-700 object-cover transform group-hover:object-bottom w-full' src={toyZone} alt="" />
                    <h3 className='text-2xl text-orange-400 mt-4'>Project Name: Toy Zone</h3>
                    <h3 className='font-lg text-orange-400 my-4 leading-7'>Technology: React || Firebase || React Router || MongoDB || Express Js || Tailwind || daisiUi || Sweetalert2 (npm package)</h3>
                    <div className='text-center'>
                        <Link className='btn btn-secondary' to={`https://toy-market-6e538.web.app/`}>Live Site</Link>
                        <Link className='btn btn-info mx-2 my-3 md:my-0' to={`https://github.com/Rayhanali-dev/toy-market-client`}>Client Side</Link>
                        <Link className='btn btn-success' to={`https://github.com/Rayhanali-dev/toy-market-server`}>server Side</Link>
                    </div>
                </div>
                <div className='p-4 group rounded-xl border-4 border-orange-400'>
                    <img className='object-left-top h-80 duration-700 object-cover transform group-hover:object-bottom w-full' src={foxeresto} alt="" />
                    <h3 className='text-2xl text-orange-400 mt-4'>Project Name: Foxeresto</h3>
                    <h3 className='font-lg text-orange-400 my-4 leading-7 mb-11'>Technology: React || Firebase || React Router || Express Js || Tailwind || daisiUi || </h3>
                    <div className='text-center'>
                        <Link className='btn btn-secondary' to={`https://chef-recipe-authentication.web.app/`}>Live Site</Link>
                        <Link className='btn btn-info mx-2 my-3 md:my-0' to={`https://github.com/Rayhanali-dev/chef-recipe-client`}>Client Side</Link>
                        <Link className='btn btn-success' to={`https://github.com/Rayhanali-dev/chef-recipe-server`}>server Side</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;