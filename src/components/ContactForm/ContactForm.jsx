import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './ContactForm.css'

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters"),
    number: Yup.number()
      .required("Number is required")
  });

  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ ...values, id: Math.random().toString(36).substr(2, 9) });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="add-form">
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" className="error" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field type="text" id="number" name="number"  />
          <ErrorMessage name="number" component="div" className="error" />
        </div>
        <button type="submit" className="add-form-btn">Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
