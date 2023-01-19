import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='h-14 bg-purple-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
            <ul className='h-full mx-auto flex justify-between items-center gap-3 font-semibold text-purple-900'>
                <h1 className='flex-1'>Moon Tech</h1>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to='/top-rated'>Top Rated</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;