import React from "react";
import { TextField, Button, Paper, Typography, Box, Grid } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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

function RegisterFormSplit() {
  return (
    <Grid
      container
      style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
    >
      <Grid item xs={12} sm={12} md={6}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height={{ xs: "auto", sm: "100%" }}
          bgcolor="primary.main"
          color="common.white"
          p={3}
        >
          <Typography variant="h4" align="center">
            Join Our Community!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height={{ xs: "auto", sm: "100%" }}
        >
          <Paper
            elevation={6}
            style={{ padding: "20px", width: "100%", maxWidth: 360 }}
          >
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
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{ margin: "20px 0" }}
                    disabled={isSubmitting}
                  >
                    Register
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

export default RegisterFormSplit;
