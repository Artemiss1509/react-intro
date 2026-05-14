import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

const SubmitForm = ()=>{
    const validationSchema = Yup.object({
        email: Yup.string().email('Enter a valid email').required('Email is required'),
        password: Yup.string().min(6,'Min 6 characters required').required('Password is required')
    });

    const initialValues = {
        email: '',
        password: ''
    };

    const formSubmit = (values, {resetForm})=> {
        console.log('Form values', values);
        alert('Form submitted')
        resetForm();
    }
    

    return (
        <div>
        <h1>Login Form</h1>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={formSubmit}>
            {() => (
            <Form>
                <div>
                <label htmlFor="email">Email</label>
                <Field type="email" id="email" name="email" />
                <ErrorMessage
                    name="email"
                    component="p"
                />
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <Field
                    type='password'
                    id='password'
                    name='password'
                />
                <ErrorMessage
                    name='password'
                    component='p'
                />
                </div>
                <Button type="submit">Submit</Button> 
            </Form>
            )}
        </Formik>
        </div>
    );
}

export default SubmitForm;