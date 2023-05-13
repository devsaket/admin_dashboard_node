import React from 'react'
import { Link } from 'react-router-dom'

const Adminnavbar = () => {
    return (
        <>
            <ul className="nav flex-column bg-dark text-secondary">
                <li className="nav-item ">
                    <Link className='text-decoration-none fs-1 fw-bold bg-dark text-light' to="/admin">Dashboard</Link>
                </li>
                <li className="nav-item ">
                    <Link className='text-decoration-none fs-3' to="/admin/administrator">Administrator</Link>
                </li>
                <li className="nav-item">
                    <Link className='text-decoration-none fs-3' to="/admin/customer">Customer</Link>
                </li>
                <li className="nav-item">
                    <Link className='text-decoration-none fs-3' to="/admin/category">Category</Link>
                </li>
                <li className="nav-item">
                    <Link className='text-decoration-none fs-3' to="/admin/products">Products</Link>
                </li>
                
                <li className="nav-item">
                    <Link className='text-decoration-none fs-3' to="/admin/invoice">Invoice</Link>
                </li>
                <li className="nav-item">
                    <Link className='text-decoration-none fs-3' to="/admin/reviews">Reviews</Link>
                </li>
            </ul>
        </>
    )
}

export default Adminnavbar