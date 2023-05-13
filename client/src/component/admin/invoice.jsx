import React from 'react'
import Adminnavbar from './adminnavbar'

import { orderObject } from '../dataset'

const Invoice = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2 d-block bg-dark sidebar ">
                        <Adminnavbar />
                    </div>

                    <div class="col-md-9 col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            {/* <h1 class="h2">Invoice</h1> */}

                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr. No.</th>
                                        <th scope="col">customerId</th>
                                        <th scope="col">productId</th>
                                        <th scope="col">quantity</th>
                                        <th scope="col">orderedOn</th>
                                        <th scope="col">transactionId</th>
                                        <th scope="col">actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orderObject.map((i) => {
                                            return (
                                                <>
                                                    <tr key={i.id}>
                                                        <th scope="row">{i.id}</th>
                                                        <td>{i.customerId}</td>
                                                        <td>{i.productId}</td>
                                                        <td>{i.quantity}</td>
                                                        <td>{i.orderedOn}</td>
                                                        <td>{i.transactionId}</td>
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

export default Invoice