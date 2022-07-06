import React, { useContext, useRef, useState } from "react";
import { Formik, Form } from "formik";
import Input from "../../material/Input";
import Button from "../../custom/Button";
import styles from "./form.module.scss";
import radio from "./radio.module.scss";
import main from "./index.module.scss";
import uploaderStyles from './uploader.module.scss';

import { ReactComponent as SuccessLogo } from "../../images/success-image.svg";
import { RegisterContext } from "../../context/RegisterContext";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import useRadio from "../../hooks/selectRadioButton";
import useUploader from "../../hooks/fileUploader";
import {ReactComponent as PhotoCover} from '../../images/photo-cover.svg'


const Basic = () => {
  const {inputRef} = useUploader()
  const [isSuccess, setSuccess] = useState(false);
  const { positions } = useContext(RegisterContext);
  const { selectedValue, onValueChange } = useRadio("");
  const { createNewUser } = useContext(RegisterContext);
  

  const submitData = (data) => {
    createNewUser(data);
  };

  const input = useRef(null)
  const [file, setFile] = useState()

  const handleChange = (event) => {
    setFile(event.target.files[0])
  }

  return (
    <div className={styles.form__container}>
      {isSuccess ? (
        <header className={main.container__header}>
          <h1 className={main.header__h1}>User successfully registered</h1>
        </header>
      ) : (
        <header className={main.container__header}>
          <h1 className={main.header__h1}>Working with POST request</h1>
        </header>
      )}

      {!isSuccess ? (
        <Formik
          initialValues={
            {
              name: "dmytro",
              email: "dmytro@gmail.com",
              phone: "380596335545",
              position_id: "",
              photo: new FormData(),
            }
          }
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
            if (!values.phone) {
              errors.phone = "Required";
            }
            if (!values.position_id || values.position_id === "")
              errors.position_id = "Required";
            if (!values.photo.name)
              values.photo = PhotoCover
            // else if (
            //     !/\+\d{2}\d{3}\d{3}\d{4}/g.test(values.phone)
            // )
            //     errors.phone = 'Wrong phone number, should be +38 (XXX) XXX - XX - XX '
            return errors;
          }}
          
          onSubmit={(
            values,
            { setSubmitting, resetForm, setFieldValue, setFieldTouched }
          ) => {
            setTimeout(() => {
              const formData = new FormData()
              formData.append('name', values.name)
              formData.append('email', values.email)
              formData.append('phone', values.phone)
              formData.append('position_id', values.position_id)
              formData.append('photo', values.photo, values.photo.name)
              submitData(formData);
              setSubmitting(false);
              setSuccess(true);
              resetForm();
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
          }) => (

            <Form onSubmit={handleSubmit}>
              <Input
                label="Your name"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                helperText={errors.name && touched.name && errors.name}
                error={errors.name && touched.name && errors.name}
              />

              <Input
                label="Email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                helperText={errors.email && touched.email && errors.email}
                error={errors.email && touched.email && errors.email}
              />

              <Input
                style={{ marginBottom: "43px" }}
                label="Phone"
                type="number"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                helperText={errors.phone && touched.phone ? errors.phone : ""}
                error={errors.phone && touched.phone && errors.phone}
              />
              <FormControl classes={radio.radio__form}>
                <FormLabel
                  sx={{
                    marginBottom: "6px",
                    fontSize: "1rem",
                    lineHeight: "1.625rem",
                    color: "black",
                    fontFamily: "Nunito",
                    fontWeight: 400,
                  }}
                  id="demo-radio-buttons-group-label"
                >
                  {errors.position_id ? "Required" : "Select your position"}
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  {positions.map((el, i) => (
                    <FormControlLabel
                      key={el.id}
                      name="position_id"
                      value={el.name}
                      label={el.name}
                      control={
                        <Radio
                          size="medium"
                          checked={selectedValue === el.name}
                          onChange={(event) => {
                            values.position_id = el.id;
                            onValueChange(event);
                          }}
                          value={el.name}
                          inputProps={{
                            fontSize: "1rem",
                            lineHeight: "1.625rem",
                            color: "black",
                            fontFamily: "Nunito",
                            fontWeight: 400,
                          }}
                          style={{ marginTop: "-6px", paddingBottom: 7 }}
                        />
                      }
                    />
                  ))}
                </RadioGroup>
              </FormControl>

              <label>
                <div
                  style={{
                    display: "flex",
                    height: "54px",
                    marginTop: "47px",
                    marginBottom: "50px",
                    overflow: "hidden",
                  }}
                >
                  <div className={uploaderStyles.input__label}>Upload</div>
                  <div className={uploaderStyles.input__field}>
                    {file?.name || "Upload your file"}
                  </div>
                </div>
                <div style={{ display: "none" }}>
                  <Input
                    name={'photo'}
                    ref={inputRef}
                    onChange={(event) => {
                      setFile(event.target.files[0])
                      values.photo = event.target.files[0]

                    }}
                    type="file"
                    className={uploaderStyles.uploader__input}
                  />
                </div>
              </label>

              <div className={styles.form__button}>
                {values.name && values.email && values.phone ? (
                  <Button
                    text="Sign up"
                    css={{ fontWeight: 100 }}
                    disabled={isSubmitting}
                  />
                ) : (
                  <Button text="Sign up" css={{ fontWeight: 100 }} disabled />
                )}
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <div style={{ marginBottom: "160px" }}>
          <SuccessLogo />
        </div>
      )}
    </div>
  );
};

export default Basic;
