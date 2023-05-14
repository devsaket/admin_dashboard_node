import React, { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
import Axios from 'axios'
import Adminnavbar from './adminnavbar';
import { useNavigate, useParams } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify';

export default function UpdateCustomer(props) {
    const { customerId } = useParams();
    let navigate = useNavigate();

    // Using Formik & Yup

    const intialValues = { firstName: "", lastName: "", email: "", contact: "", address: "" };
    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getCustomerIdObject = async (id) => {
        const response = await fetch(`http://localhost:5000/api/customers?id=${id}`, { mode: 'cors' }).then(
            (response) => response.json()
        )
        setFormValues(response)
    }

    const submit = () => {
        // console.log(formValues);

        Axios.put("http://localhost:5000/api/customers/" + customerId , formValues).then(() => {
            toast('Customer Updated Successfully!');
            navigate('/admin/customer')
        }).catch(() => {
            alert('Something Went Wrong!');
        })
    };

    //input change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    //form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    //form validation handler
    const validate = (values) => {
        let errors = {};

        const firstNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
        const lastNameRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const contactRegex = /^[0]?[6789]\d{9}$/
        const addressRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/i

        if (!values.firstName) {
            errors.firstName = "First Name cannot be blank";
        } else if (values.firstName.length < 1) {
            errors.firstName = "First Name must be more than 1 character";
        } else if (!firstNameRegex.test(values.firstName)) {
            errors.email = "Invalid First Name format";
        }

        if (!values.lastName) {
            errors.lastName = "Last Name cannot be blank";
        } else if (values.lastName.length < 1) {
            errors.lastName = "Last Name must be more than 1 character";
        } else if (!lastNameRegex.test(values.lastName)) {
            errors.email = "Invalid Last Name format";
        }

        if (!values.email) {
            errors.email = "Cannot be blank";
        } else if (!emailRegex.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.contact) {
            errors.contact = "Contact No. cannot be blank";
        } else if (values.contact.length < 10) {
            errors.contact = "Contact No. must be of 10 characters";
        } else if (!contactRegex.test(values.contact)) {
            errors.contact = "Invalid Contact No. format";
        }

        if (!values.address) {
            errors.address = "Address Cannot be blank";
        } else if (!addressRegex.test(values.address)) {
            errors.address = "Invalid Address format";
        }

        return errors;
    };

    useEffect(() => {
        getCustomerIdObject(customerId)

        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();
        }
    }, [formErrors]);

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
                                <h1 className="fs-1">Update Customer </h1>
                                <Button className='btn btn-primary' onClick={()=>{navigate('/admin/customer')}}>Back</Button>
                            </div>
                            <div className="col-12 mt-4">
                                <Form onSubmit={handleSubmit} noValidate>
                                    <Form.Group className="mb-3" controlId="addCustomer.ControlInput1">
                                        <Form.Label>FirstName</Form.Label>
                                        <Form.Control type="text" name="firstName" placeholder="James" value={formValues.firstName} onChange={handleChange} className={formErrors.firstName && "input-error"} />
                                        {formErrors.firstName && (<span className="error text-danger">{formErrors.firstName}</span>)}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="addCustomer.ControlInput2">
                                        <Form.Label>LastName</Form.Label>
                                        <Form.Control type="text" name="lastName" placeholder="Bond" value={formValues.lastName} onChange={handleChange} className={formErrors.lastName && "input-error"} />
                                        {formErrors.lastName && (<span className="error text-danger">{formErrors.lastName}</span>)}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="addCustomer.ControlInput3">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="name@example.com" value={formValues.email} onChange={handleChange} className={formErrors.email && "input-error"} />
                                        {formErrors.email && (<span className="error text-danger">{formErrors.email}</span>)}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="addCustomer.ControlInput4">
                                        <Form.Label>Contact</Form.Label>
                                        <Form.Control type="text" name="contact" placeholder="9874563210" value={formValues.contact} onChange={handleChange} className={formErrors.contact && "input-error"} />
                                        {formErrors.contact && (<span className="error text-danger">{formErrors.contact}</span>)}
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="addCustomer.ControlInput5">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="text" name="address" placeholder="#234, Sector 44A, Chnadigarh - 160047" value={formValues.address} onChange={handleChange} className={formErrors.address && "input-error"} />
                                        {formErrors.address && (<span className="error text-danger">{formErrors.address}</span>)}
                                    </Form.Group>

                                    <Button type="submit">Submit</Button>
                                </Form>
                                <ToastContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}
