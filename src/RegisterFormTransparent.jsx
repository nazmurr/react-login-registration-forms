import React from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import backgroundImage from "./background_img.jpg";
import styles from "./css/RegisterFormTransparent.module.css";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function RegisterFormTransparent() {
  return (
    <Box
      className={styles.registerFormContainer}
      sx={{
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
          zIndex: -1,
        },
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        className={styles.mainContainer}
      >
        <Paper elevation={6} className={styles.registerPaper}>
          <Typography variant="h5" component="h1" gutterBottom>
            Register
          </Typography>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              // You can also handle server-side integration here
              setTimeout(() => {
                console.log("Form Data:", values);
                actions.setSubmitting(false);
                alert("Registration Successful!");
              }, 2000);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Name"
                  name="name"
                  autoFocus
                  error={touched.name && !!errors.name}
                  helperText={touched.name && errors.name}
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="new-password"
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
                <Field
                  as={TextField}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  autoComplete="new-password"
                  error={touched.confirmPassword && !!errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={styles.registerButton}
                  disabled={isSubmitting}
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </Box>
  );
}

export default RegisterFormTransparent;
