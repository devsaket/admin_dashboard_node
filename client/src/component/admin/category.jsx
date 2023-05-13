import React from 'react'
import Adminnavbar from './adminnavbar'

import { categoryObject } from '../dataset'

const Category = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2 d-block bg-dark sidebar ">
                        <Adminnavbar />
                    </div>

                    <div class="col-md-9 col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            {/* <h1 class="h2">Category</h1> */}

                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Sr. No.</th>
                                        <th scope="col">categoryName</th>
                                        <th scope="col">createdBy</th>
                                        <th scope="col">createdOn</th>
                                        <th scope="col">status</th>
                                        <th scope="col">actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        categoryObject.map((i) => {
                                            return (
                                                <>
                                                    <tr key={i.id}>
                                                        <th scope="row">{i.id}</th>
                                                        <td>{i.categoryName}</td>
                                                        <td>{i.createdBy}</td>
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

export default Category