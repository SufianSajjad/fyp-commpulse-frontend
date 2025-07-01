import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Home from './Home'

function Layout() {
    return (
        <div>
            <Navbar />
            <Home />

            {/* This is where the child components will be rendered */}
            <Outlet />
        </div>
    )
}

export default Layout