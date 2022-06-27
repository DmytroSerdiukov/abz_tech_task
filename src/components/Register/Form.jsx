import React, { useState } from "react";
import { Formik, Form } from "formik";
import Input from "../../material/Input";
import Button from "../../custom/Button";
import styles from './form.module.scss'
import RadioButton from "../../material/RadioButton";
import { TextField } from "@mui/material";
import UploadButtons from "../../custom/Uploader";
import { ReactComponent as SuccessLogo } from "../../images/success-image.svg";

const Basic = ({positions}) => {

  const [isSuccess, setSuccess] = useState(false)
  return <div className={styles.form__container}>
    {!isSuccess ?
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if(!values.phone) {
            errors.phone = 'Required'
        } 
        // else if (
        //     !/\+\d{2}\d{3}\d{3}\d{4}/g.test(values.phone)
        // )
        //     errors.phone = 'Wrong phone number, should be +38 (XXX) XXX - XX - XX '
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm, setFieldValue }) => {
        setTimeout(() => {
          // alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          setSuccess(true)
          resetForm()
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <Form onSubmit={handleSubmit}>

            <Input label="Your name"
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            helperText={errors.name && touched.name && errors.name}
            error={errors.name && touched.name && errors.name}
            />
          
          <Input label="Email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            helperText={errors.email && touched.email && errors.email}
            error={errors.email && touched.email && errors.email}
            />

          <Input label="Phone"
            type="number"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            helperText={(errors.phone && touched.phone ? errors.phone :'+38 (XXX) XXX - XX - XX')}
            error={errors.phone && touched.phone && errors.phone}
            />
           <RadioButton positions={positions}/>
           <UploadButtons />
           {/* <TextField type='file'  placeholder="Upload your photo" /> */}
            {/* <Input
              variant=''
              type='file'
            /> */}
          <div className={styles.form__button}>
            {values.name && values.email && values.phone  ? 
                <Button text="Submit" disabled={isSubmitting}/> : <Button text="Submit" disabled/>  
            }
          </div>
        
        </Form>
      )}
    </Formik>
    : <SuccessLogo />
  }
  </div>
};

export default Basic;
