import { Form, Field, ErrorMessage } from "formik";
import { Formik } from "formik";
import * as yup from "yup";
export default function FormValidation() {
    const defaultvalue = {
        name: "",
        email: "",
        password: "",
        gender: "",
        termsAndCon: false,
        transportMode: ""
    }
    const validationSchema = yup.object().shape({
        name: yup.string().required("Please enter your name"),
        email: yup.string().required("Please enter your email").email("please enter valid email"),
        password: yup.string().required("Please enter your password"),
        gender: yup.string().required("Please enter your gender"),
        termsAndCon: yup.boolean().oneOf([true], "Please accepts terms and conditions"),
        transportMode: yup.string().required("Please enter your transportMode")
    });
    const handelSubmit = (values) => {
        console.log("values",values);
       
    }
    return (
        <>
        <Formik initialValues={defaultvalue} validationSchema={validationSchema} onSubmit={handelSubmit}>
                <Form>
                    <div>    <Field type="text" name="name" placeholder="Enter Your Name" ></Field>
                    <p className="text-danger"> 
<ErrorMessage name="name"></ErrorMessage>
                    </p></div>
                <div><Field type="text" name="email" placeholder="Enter Your Email" ></Field>
                       <p className="text-danger"> 
<ErrorMessage name="email"></ErrorMessage>
                    </p></div>
                    <div><Field type="text" name="password" placeholder="Enter Your password" ></Field>
                       <p className="text-danger"> 
<ErrorMessage name="password"></ErrorMessage>
                        </p></div>
                    <div>
                        <Field component="select" name="gender" placeholder="Please select your gender">
                            <option value="" disabled>Please Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            
                        </Field>
                         <p className="text-danger"> 
<ErrorMessage name="gender"></ErrorMessage>
                        </p>
                    </div>
                    <div>
                        <label>
                            <Field type="checkbox" name="termsAndCon"></Field>
                            I accept the terms and condition
                        </label>
   <p className="text-danger"> 
<ErrorMessage name="termsAndCon"></ErrorMessage>
                        </p>                        

                    </div>
                    <div>
                        <label>
                            <Field type="radio" name="transportMode" value="bike"></Field>
                            Bike
                        </label>
                         <label>
                            <Field type="radio" name="transportMode" value="car"></Field>
                            Car
                        </label>
   <p className="text-danger"> 
<ErrorMessage name="transportMode"></ErrorMessage>
                        </p>                        

                    </div>

                    <button className="btn" type="submit">Submit </button>
            </Form>
        </Formik>
        </>
        
    )
};
