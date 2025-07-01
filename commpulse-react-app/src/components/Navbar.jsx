import React from 'react'

// Import images
import logoBlack from '../assets/logo/logo-black.png';
import homeUnselected from '../assets/navbar/home-unselected.png'
import homeSelected from '../assets/navbar/home-selected.png'
import teamUnselected from '../assets/navbar/team-unselected.png'
import teamSelected from '../assets/navbar/team-selected.png'
import graphUnselected from '../assets/navbar/graph-unselected.png'
import graphSelected from '../assets/navbar/graph-selected.png'
import logoutUnselected from '../assets/navbar/logout-unselected.png'
import logoutSelected from '../assets/navbar/logout-selected.png'

function Navbar() {
    return (
        <div className='h-screen w-fit fixed top-0 left-0 py-5 px-2 flex flex-col items-center rounded-lg shadow-xl'>
            {/* Logo */}
            <img src={logoBlack} alt="logo" className='w-16 hover:cursor-pointer' />

            {/* Navgation */}
            <ul className='flex-1 flex flex-col justify-center gap-5'>
                <li className='hover:cursor-pointer hover:bg-slate-300 rounded-lg p-1'>
                    <img src={homeUnselected} alt="home" className='w-8' />
                </li>
                <li className='hover:cursor-pointer hover:bg-slate-300 rounded-lg p-1'>
                    <img src={teamUnselected} alt="team" className='w-8' />
                </li>
                <li className='hover:cursor-pointer hover:bg-slate-300 rounded-lg p-1'>
                    <img src={graphUnselected} alt="graph" className='w-8' />
                </li>
            </ul>

            { /* Logout */}
            <ul className='mt-auto'>
                <li className='hover:cursor-pointer hover:bg-slate-300 rounded-lg p-1'>
                    <img src={logoutUnselected} alt="logout" className='w-8' />
                </li>
            </ul>
        </div>
    )
}

export default Navbar
