import React, { useContext, useRef, useState } from "react";

import * as yup from "yup";
import { Formik, Form } from "formik";
import Input from "../../material/Input";
import Button from "../../custom/Button";
import {
  createTheme,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
} from "@mui/material";

import useUploader from "../../hooks/fileUploader";
import useRadio from "../../hooks/selectRadioButton";
import { RegisterContext } from "../../context/RegisterContext";

import { ReactComponent as SuccessLogo } from "../../images/success-image.svg";
import { ReactComponent as PhotoCover } from "../../images/photo-cover.svg";

import styles from "./form.module.scss";
import radio from "./radio.module.scss";
import main from "./index.module.scss";
import uploaderStyles from "./uploader.module.scss";

const Schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "name should be at least 2 symbols")
    .required("Required"),

  email: yup.string().email("Invalid email").required("Required"),

  phone: yup
    .string()
    .min(12, "Phone must be 12 symbols")
    .max(12, "Phone must be 12 symbols")
    .required("Required"),
  photo: yup.object(),
});

const media = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

const radioStyles = {
  width: 34,
  height: 33.2,
  color: '#D0CFCF',
  checkedColor: '#00BDD3',
  paddingRight: 22
}

const theme = createTheme({
  typography: {
    fontFamily: ["Nunito", "sans-serif"].join(","),
  },
  radio: {
    fontSize: "1rem",
    lineheight: "1.625rem",
  },
  breakpoints: {},
  components: {
    MuiTextField: {
      color: "yellow",
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          width: radioStyles.width,
          height:radioStyles.height,
          paddingRight: radioStyles.paddingRight,
          color: radioStyles.color,
          '& .Mui-checked': {
            width: radio.width,
            height: radio.height,
            paddingRight: radioStyles.paddingRight,
            color: radioStyles.checkedColor,

          }
        }
      }
    },
  },
});

console.log(theme);

const Basic = () => {
  const { inputRef } = useUploader();
  const [isSuccess, setSuccess] = useState(false);
  const { positions } = useContext(RegisterContext);
  const { selectedValue, onValueChange } = useRadio("");
  const { createNewUser } = useContext(RegisterContext);


  const fields_sizes = {
      md: 380,
      sm: 380,
      xs: 328
  }
  const submitData = (data) => {
    console.log(data);
    createNewUser(data);
  };

  const [file, setFile] = useState();

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <ThemeProvider theme={theme}>
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
            initialValues={{
              name: "",
              email: "",
              phone: "",
              position_id: "",
              photo: new FormData(),
            }}
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
              return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              setTimeout(() => {
                const formData = new FormData();
                formData.append("name", values.name);
                formData.append("email", values.email);
                formData.append("phone", values.phone);
                formData.append("position_id", values.position_id);
                formData.append("photo", values.photo, values.photo.name);
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
              setSubmitting,
            }) => (
              <FormControl sx={{
                width: {...fields_sizes}
              }}>

              <Form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                  <Input
                    sx={{ marginBottom: "49px",
                      width: {...fields_sizes},
                  }}
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
                    sx={{ marginBottom: "50px",
                    width: {...fields_sizes} 
                   }}
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
                    sx={{ marginBottom: "43px",
                    width: {...fields_sizes}
                   }}
                    label="Phone"
                    type="number"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                    helperText={
                      errors.phone && touched.phone ? errors.phone : ""
                    }
                    error={errors.phone && touched.phone && errors.phone}
                  />
                </div>
                <FormControl classes={radio.radio__form}>
                  <FormLabel
                    sx={{
                      marginTop: "3px",
                      marginBottom: "7px",
                      fontSize: "1rem",
                      padding: 0,
                      lineheight: "1.625rem",
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
                    sx={{}}
                  >
                    {positions.map((el, i) => (
                      <FormControlLabel
                        key={el.id}
                        name="position_id"
                        value={el.name}
                        label={el.name}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: 0,
                          margin: 0,
                          lineheight: "1.625rem",
                          fontSize: "1rem",
                        }}
                        control={
                          <Radio
                            checked={selectedValue === el.name}
                            onChange={(event) => {
                              values.position_id = el.id;
                              onValueChange(event);
                            }}
                            value={el.name}
                            sx={{
                              marginTop: 0,
                            }}
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
                      marginTop: "44px",
                      marginBottom: "50px",
                      overflow: "hidden",
                      paddingBottom: "18px",
                    }}
                  >
                    <div className={uploaderStyles.input__label}>Upload</div>
                    <div className={uploaderStyles.input__field}>
                      {file?.name || "Upload your photo"}
                    </div>
                  </div>
                  <div style={{ display: "none" }}>
                    <Input
                      name={"photo"}
                      ref={inputRef}
                      onChange={(event) => {
                        setFile(event.target.files[0]);
                        values.photo = event.target.files[0];
                      }}
                      type="file"
                      className={uploaderStyles.uploader__input}
                    />
                  </div>
                </label>

                <div className={styles.form__button}>
                  {values.name &&
                  values.email &&
                  values.phone &&
                  values.position_id ? (
                    <Button
                      type="submit"
                      text="Sign up"
                      css={{ fontWeight: 100 }}
                      disabled={isSubmitting}
                    />
                  ) : (
                    <Button text="Sign up" css={{ fontWeight: 100 }} disabled />
                  )}
                </div>
              </Form>
            </FormControl>
            )}
          </Formik>

        ) : (
          <div style={{ marginBottom: "160px" }}>
            <SuccessLogo />
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};

export default Basic;
