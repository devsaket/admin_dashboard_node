import React from 'react'
import Adminnavbar from './adminnavbar'

import { customerObject } from '../dataset'

const Customer = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2 d-block bg-dark sidebar ">
                        <Adminnavbar />
                    </div>

                    <div class="col-md-9 col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            {/* <h1 class="h2">Customer</h1> */}

                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
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
                                                    <tr key={i.id}>
                                                        <th scope="row">{i.id}</th>
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