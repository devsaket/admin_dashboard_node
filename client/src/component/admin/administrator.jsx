
import Adminnavbar from './adminnavbar'

const administrator = () => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2 d-block bg-dark sidebar ">
                        <Adminnavbar />
                    </div>

                    <div class="col-md-9 col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Administrator Profile</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default administrator