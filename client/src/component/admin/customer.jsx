import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {BsPlusCircleFill, BsTrash3Fill} from 'react-icons/bs'
import {FaUserEdit} from 'react-icons/fa'

import {getFormattedDate} from '../../CustomFunctions'
import Adminnavbar from './adminnavbar'
import AddNewCustomer from './addNewCustomer'

// import { customerObject } from '../dataset'

const Customer = () => {
    const [customerObject, setcustomerObject] = useState([])
    const [modalShow, setModalShow] = useState(false);


    const getCustomerObject = async () => {
        const response = await fetch("http://localhost:5000/api/customers", { mode: 'cors' }).then(
            (response) => response.json()
        )
        setcustomerObject(response)
    }

    // const [strAscending, setStrAscending] = useState([...customerObject])
    // const [strDescending, setStrDescending] = useState([...customerObject])

    // const handleNameSort = () => {
    //     let strAscendingorder = [...customerObject].sort((a, b) =>
    //         a.firstName.toLowerCase() > b.firstName.toLowerCase() ? 1 : -1,
    //     );

    //     setStrAscending(strAscendingorder)

    //     const strDescending = [...customerObject].sort((a, b) =>
    //         a.lastName > b.lastName ? -1 : 1,
    //     );

    //     setStrDescending(strDescending);
    // }

    useEffect(() => {
        getCustomerObject()
    }, [])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2 d-block bg-dark sidebar">
                        <Adminnavbar />
                    </div>

                    <div className="col-md-9 col-lg-10 px-md-4 pt-2">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between">
                                <h1 className="fs-1">Customer </h1> 
                                <Button  onClick={() => setModalShow(true)} ><BsPlusCircleFill /> Add New Customer</Button>

                                <AddNewCustomer show={modalShow} onHide={() => setModalShow(false)} />
                            </div>
                            <div className="col-12 mt-4">
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr key='tr1'>
                                            <th scope="col">Sr. No.</th>
                                            <th scope="col">firstName</th>
                                            <th scope="col">lastName</th>
                                            <th scope="col">email</th>
                                            <th scope="col">contact</th>
                                            <th scope="col">address</th>
                                            <th scope="col">createdOn</th>
                                            <th scope="col">actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            customerObject.map((i,j) => {
                                                return (
                                                    <>
                                                        <tr key={i._id}>
                                                            <th scope="row">{j+1}</th>
                                                            <td>{i.firstName}</td>
                                                            <td>{i.lastName}</td>
                                                            <td>{i.email}</td>
                                                            <td>{i.contact}</td>
                                                            <td>{i.address}</td>
                                                            <td>{getFormattedDate(i.createdOn)}</td>
                                                            <td>
                                                                <Link to="" className='ms-2'><FaUserEdit /></Link>
                                                                <Link to="" className='ms-2'><BsTrash3Fill /></Link>
                                                            </td>
                                                        </tr>
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customer