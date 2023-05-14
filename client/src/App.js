import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'reactjs-popup/dist/index.css';
import './assets/style/style.scss';
// import Index from "./component/index.jsx";
// import Login from "./component/login/login";
// import Signup from "./component/signup";

import { Routes, Route } from "react-router-dom";
// import Home from "./component/pages/home";
// import About from "./component/pages/about";
// import Contact from "./component/pages/contact"
// import Services from "./component/pages/services"



// ADmin Dashboard 
import Dashboard from "./component/admin/dashboard";
import Administrator from "./component/admin/administrator"
import Customer from "./component/admin/customer"
import Category from "./component/admin/category"
import Products from "./component/admin/products"
import Invoice from "./component/admin/invoice"
import Reviews from "./component/admin/reviews"
import UpdateCustomer from "./component/admin/updateCustomer";

function App() {
    return (
        <>
            {/* <Index /> */}
            {/* <Login /> */}
            {/* <Signup /> */}


            {/* <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Services" element={<Services />} />
            </Routes> */}

            <Routes>
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/admin/administrator" element={<Administrator />} />
                <Route path="/admin/customer" element={<Customer />} />
                <Route path="/admin/customer/update-customer/:customerId" element={<UpdateCustomer />} />
                <Route path="/admin/category" element={<Category />} />
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/invoice" element={<Invoice />} />
                <Route path="/admin/reviews" element={<Reviews />} />
            </Routes>
        </>
    );
}

export default App;
