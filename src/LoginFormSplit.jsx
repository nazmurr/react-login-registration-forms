import React from "react";
import { TextField, Button, Paper, Typography, Box, Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./css/LoginFormSplit.module.css";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters long")
    .required("Password is required"),
});

function LoginFormSplit() {
  return (
    <Grid container className={styles.gridContainer}>
      <Grid item xs={12} sm={12} md={6}>
        <Box className={styles.welcomeBox} height={{ xs: "auto", sm: "100%" }}>
          <Typography variant="h4" align="center">
            Welcome to Our Service!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Box className={styles.formBox} height={{ xs: "auto", sm: "100%" }}>
          <Paper elevation={6} className={styles.paperContainer}>
            <Typography variant="h5" component="h1" gutterBottom>
              Login
            </Typography>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                setTimeout(() => {
                  console.log("Form Data:", values);
                  actions.setSubmitting(false);
                  alert("Login Successful!");
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
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
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
                    autoComplete="current-password"
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    Log In
                  </Button>
                </Form>
              )}
            </Formik>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
}

export default LoginFormSplit;
