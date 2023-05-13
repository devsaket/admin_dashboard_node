import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <ul className="nav flex-column">
                <li className="nav-item ">
                    <Link className='text-decoration-none fs-3' to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className='text-decoration-none fs-3' to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className='text-decoration-none fs-3' to="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className='text-decoration-none fs-3' to="/contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar