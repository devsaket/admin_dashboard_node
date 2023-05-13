import React from 'react'
import Adminnavbar from './adminnavbar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-lg-2 d-block bg-dark  sidebar ">
                    <Adminnavbar />
                </div>

                <div class="col-md-9 col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Admin Dashboard</h1>
                    </div>

                    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">

                        <div class="col">
                            <Link to="/admin/category">
                            <div class="card mb-4 rounded-3 shadow-sm">
                                <div class="card-body">
                                    <h1 className='totalno'>6</h1>
                                    <div class="border-top py-3">
                                        <h4 class="fw-normal">Category Object</h4>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                        

                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm">
                                <div class="card-body">
                                    <h1 className='totalno'>6</h1>
                                    <div class="border-top py-3">
                                        <h4 class="fw-normal">Product Object</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm">
                                <div class="card-body">
                                    <h1 className='totalno'>6</h1>
                                    <div class="border-top py-3">
                                        <h4 class="fw-normal">Customer Object</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="card mb-4 rounded-3 shadow-sm">
                                <div class="card-body">
                                    <h1 className='totalno'>6</h1>
                                    <div class="border-top py-3">
                                        <h4 class="fw-normal">Order Object</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Dashboard


