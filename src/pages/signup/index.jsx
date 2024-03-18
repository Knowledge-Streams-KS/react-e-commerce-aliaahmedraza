import { useState } from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import { Formik } from 'formik';
import { NavLink } from 'react-router-dom';
import * as yup from 'yup';

export default function Signup() {
    const [isRegistered, setIsRegistered] = useState(false);

    const defaultvalue = {
        name: '',
        email: '',
        password: '',
        gender: '',
        contactNumber: '',
        termsAndCon: false,
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required('Please enter your name'),
        email: yup.string().required('Please enter your email').email('please enter valid email'),
        password: yup.string().min(8, 'Password must be at least 8 characters').required('Please enter your password'),
        gender: yup.string().required('Please enter your gender'),
        contactNumber: yup.string().matches(/^[0-9]+$/, 'Number be only digits').max(11, 'Contact number must be 11 digits').required('Please enter your Contact Number'),
        termsAndCon: yup.boolean().oneOf([true], 'Please accepts terms and conditions'),
    });

    const handleSubmit = (values) => {
        console.log('values', values);
        // Perform registration logic here
        setIsRegistered(true); // Set state to show success message
    };

    return (
        <div className="signup-container">
            <h1 className="heading">Sign Up</h1>
            {isRegistered && <div className="success-message">You have successfully registered!</div>}
            <Formik initialValues={defaultvalue} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <div className="form-group">
                        <Field type="text" name="name" placeholder="Enter Your Name" />
                        <ErrorMessage name="name" />
                    </div>
                    <div className="form-group">
                        <Field type="text" name="email" placeholder="Enter Your Email" />
                        <ErrorMessage name="email" />
                    </div>
                    <div className="form-group">
                        <Field type="text" name="password" placeholder="Enter Your password" />
                        <ErrorMessage name="password" />
                    </div>
                    <div className="form-group">
                        <Field type="text" name="contactNumber" placeholder="Enter Your phonenumber" />
                        <ErrorMessage name="contactNumber" />
                    </div>
                    <div className="form-group">
                        <Field component="select" name="gender" placeholder="Please select your gender">
                            <option value="" disabled>Please Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Field>
                        <ErrorMessage name="gender" />
                    </div>
                    <div className="form-group">
                        <label>
                            <Field type="checkbox" name="termsAndCon" />
                            I accept the terms and condition
                        </label>
                        <ErrorMessage name="termsAndCon" />
                    </div>
                    <button className="btn btn-primary" type="submit">Sign Up</button>
                </Form>
            </Formik>
            <NavLink className="login" to="/login">Already have an account? Log In</NavLink>
        </div>
    );
}
