import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  Button,
  Container,
  Card,
  Form as BootstrapForm,
} from "react-bootstrap";

const SubmitForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Min 6 characters required")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const formSubmit = (values, { resetForm }) => {
    console.log("Form values", values);
    alert("Form submitted");
    resetForm();
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card className="p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login Form</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={formSubmit}
        >
          {() => (
            <Form>
              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Label>Email</BootstrapForm.Label>

                <Field
                  type="email"
                  name="email"
                  className="form-control"
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger mt-1"
                />
              </BootstrapForm.Group>

              <BootstrapForm.Group className="mb-3">
                <BootstrapForm.Label>Password</BootstrapForm.Label>

                <Field
                  type="password"
                  name="password"
                  className="form-control"
                />

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger mt-1"
                />
              </BootstrapForm.Group>

              <div className="d-grid">
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </Container>
  );
};

export default SubmitForm;