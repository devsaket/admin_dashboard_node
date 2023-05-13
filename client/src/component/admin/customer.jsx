import React, { useState, useEffect } from 'react'
import Adminnavbar from './adminnavbar'
import axios from 'axios'

// import { customerObject } from '../dataset'

const Customer = () => {
    const [customerObject, setcustomerObject] =useState([])

    const getCustomerObject = async ()=>{
        const response = await fetch("http://localhost:5000/api/customers", {mode:'cors'}).then(
            (response)=> response.json()
        )

        console.log("fetched Data ", response)
        setcustomerObject(response)
    }

    useEffect(()=>{
        getCustomerObject()
    },[])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2 d-block bg-dark sidebar ">
                        <Adminnavbar />
                    </div>

                    <div className="col-md-9 col-lg-10 px-md-4">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Customer</h1>

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
                                        <th scope="col">status</th>
                                        <th scope="col">actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        customerObject.map((i) => {
                                            return (
                                                <>
                                                    <tr key={i._id}>
                                                        <th scope="row">{i._id}</th>
                                                        <td>{i.firstName}</td>
                                                        <td>{i.lastName}</td>
                                                        <td>{i.email}</td>
                                                        <td>{i.contact}</td>
                                                        <td>{i.address}</td>
                                                        <td>{i.createdOn}</td>
                                                        <td>{i.status}</td>
                                                        <td>{i.actions}</td>
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
        </>
    )
}

export default Customer