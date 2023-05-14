import React, { useState, useEffect } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';
// import { useForm } from 'react-hook-form'
import { ToastContainer } from 'react-toastify';
import { showToastMessage } from '../../CustomFunctions'

import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function AddNewCustomer(props) {
    let navigate = useNavigate();
    const intialValues = { firstName: "", lastName: "", email: "", contact: "", address: "" };

    const [formValues, setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = () => {
        console.log(formValues);

        Axios.post("http://localhost:5000/api/customers", formValues).then(() => {
            alert('Customer Added Successfully!');
            props.onHide(true)
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
            errors.email = "Invalid Contact No. format";
        }

        if (!values.address) {
            errors.address = "Address Cannot be blank";
        } else if (!addressRegex.test(values.address)) {
            errors.address = "Invalid Address format";
        }

        return errors;
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            submit();
        }
    }, [formErrors]);

    return (
        <>
            {/* Formik  */}
            <Modal {...props} size="lg" aria-labelledby="addNewCustomer" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="addNewCustomer">
                        Add New Customer
                    </Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit} noValidate>
                    <Modal.Body>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button type="submit">Submit</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}
