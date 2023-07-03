import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const option = <>
            <Link className='text-orange-400 text-lg' to={`/`}>Home</Link>
            <Link className='text-orange-400 text-lg' to={`/`}>About</Link>
            <Link className='text-orange-400 text-lg' to={`/`}>Skills</Link>
            <Link className='text-orange-400 text-lg' to={`/`}>Project</Link>
            <Link className='text-orange-400 text-lg' to={`/`}>Contact</Link>
    </>

    return (
        <div className='bg-slate-600'>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm gap-6 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {option}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">Rayhan Ali</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-6 menu-horizontal px-1">
                        {option}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={`/`} className="text-orange-400 text-lg btn bg-orange-950">Download Resume</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;