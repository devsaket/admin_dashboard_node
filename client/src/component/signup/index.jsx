import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Signup = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'>
            <div className='container w-50 border mt-4'>
                <div className='row text-center rounded-2'>
                    <div className='col-12'>
                        <h2 className=' mb-4'>Sign Up to Continue</h2>
                    </div>

                    <div className="col-12 g-0 text-center">
                        <button className='btn btn-lg w-100 text-dark border-1 border-end-0'  onClick={() => setIsSignIn(false)}>Sign Up</button>
                    </div>
                </div>
                <div className='row'>

                    <div className='col'>
                        <form onSubmit={handleSubmit(onSubmit)} className=" m-4">
                            <label className='form-label'>Email</label>

                            <input type="email" className="form-control " placeholder='email'{...register("email", { required: 'Enter your e-mail', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Enter a valid e-mail address' } })} aria-invalid={errors.email ? "true" : "false"} />
                            {errors.email && <p role="alert">{errors.email.message}</p>}

                            <label className='form-label mt-3'>Password</label>
                            <input type="password" className="form-control " placeholder='Password'{...register("password", { required: 'Enter your e-mail', minLength: { value: 4, message: "Password must be more than 4 characters", }, maxLength: { value: 10, message: "Password must be less than 10 characters", }, })} aria-invalid={errors.email ? "true" : "false"} />
                            {errors.password && <p role="alert">{errors.password.message}</p>}

                            <label className='form-label mt-3'>Confirm Password</label>
                            <input type="password" className="form-control " placeholder='Password'{...register("password", { required: '', minLength: { value: 4, message: "Password must be more than 4 characters", }, maxLength: { value: 10, message: "Password must be less than 10 characters", }, })} aria-invalid={errors.email ? "true" : "false"} />
                            {errors.password && <p role="alert">{errors.password.message}</p>}

                            <input type="checkbox"  value="Remember_Me" {...register("remember_me")} />
                            {/* <label className='form-label mt-3 mx-2'> Remember Me</label> */}
                            <button className='btn bg-primary px-5 my-3 d-block'>Register</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup;