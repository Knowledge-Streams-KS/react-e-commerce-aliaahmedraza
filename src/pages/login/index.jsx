import { Form, Field, ErrorMessage } from "formik";
import { Formik } from "formik";
import { NavLink, Navigate } from "react-router-dom";
import * as yup from "yup";

export default function Login() {
    const defaultvalue = {
        email: "",
        password: "",
    };

    const validationSchema = yup.object().shape({
        email: yup.string().required("Please enter your email").email("Please enter a valid email"),
        password: yup.string().required("Please enter your password"),
    });

    const handleSubmit = (values) => {
        console.log("values",values);
    };

    return (
        <div className="login-container">
            <h1 className="heading">LOGIN</h1>
            <Formik initialValues={defaultvalue} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <Field type="text" name="email" placeholder="Enter Your Email" />
                        <p className="text-danger">
                            <ErrorMessage name="email" />
                        </p>
                    </div>
                    <div>
                        <Field type="password" name="password" placeholder="Enter Your password" />
                        <p className="text-danger">
                            <ErrorMessage name="password" />
                        </p>
                    </div>
                    <button type="submit">Login</button>
                </Form>
            </Formik>
            <NavLink className="signup" to={"/signup"}>SignUp</NavLink>
        </div>
    );
};
