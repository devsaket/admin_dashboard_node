import React from 'react'
import Navbar from '../Navbar'

const services = () => {
    return (
        <>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-lg-2 d-block bg-light sidebar ">
                    <Navbar />
                </div>

                <div class="col-md-9 col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">services</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default services