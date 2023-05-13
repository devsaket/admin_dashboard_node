import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Login= () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='container-fluid d-flex justify-content-center align-items-center'>
            <div className='container w-50 border mt-4'>
                <div className='row text-center rounded-2'>
                    <div className='col-12'>
                        <h2 className=' mb-4'>Please Login To Continue</h2>
                    </div>
                    <div className="col-12 g-0 text-center">
                        <button className='  btn btn-lg w-100 text-dark' style={isSignIn ? { background: 'white' } : { background: 'gray' }} onClick={() => setIsSignIn(true)}>Login</button>
                    </div>
                </div>
                <div className='row'>
                        <div className='col'>
                            <form onSubmit={handleSubmit(onSubmit)} className="signinform m-4">
                                <label className='form-label'>Email</label>
                                <input type="email" className="form-control signin" placeholder='emailid'{...register("email", { required: 'Enter your e-mail', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: 'Enter a valid e-mail address' } })} aria-invalid={errors.email ? "true" : "false"} />
                                {errors.email && <p role="alert">{errors.email.message}</p>}

                                <label className='form-label mt-3'>Password</label>
                                <input type="password" className="form-control signin" placeholder='Password'{...register("password", { required: 'Enter your e-mail', minLength: { value: 4, message: "Password must be more than 4 characters", }, maxLength: { value: 10, message: "Password must be less than 10 characters", }, })} aria-invalid={errors.email ? "true" : "false"} />
                                {errors.password && <p role="alert">{errors.password.message}</p>}

                                <input type="checkbox" className="signin" value="Remember_Me" {...register("remember_me")} />
                                <label className='form-label mt-3 mx-2'> Remember Me</label>
                                <button className='btn bg-success px-5 my-3 d-block'>Login</button>
                            </form>
                        </div>
                        
                </div>
            </div>
        </div>
    )
}

export default Login;