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

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must be at least 5 characters long")
    .required("Password is required"),
});

function LoginFormTransparent() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        backgroundColor: "transparent",
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
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            padding: "20px",
            width: "100%",
            maxWidth: 360,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          <Typography variant="h5" component="h1" gutterBottom>
            Login
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
              // You can also handle server-side integration here
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
                  sx={{ margin: "20px 0" }}
                  disabled={isSubmitting}
                >
                  Log In
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Container>
    </Box>
  );
}

export default LoginFormTransparent;
