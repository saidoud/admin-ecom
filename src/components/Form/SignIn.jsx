import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box } from "@mui/system";

function SignIn() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("email"),
    password: Yup.string().required().min(4).label("Password"),
  });

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        validate={() => console.log("validate")}
        onSubmit={() => console.log("submit")}
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
          <Box sx={{ mt: 1 }} component="form" onSubmit={handleSubmit}>
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              id="password"
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setError(false)}
            >
              Sign In
            </Button>
          </Box>
        )}
      </Formik>
    </>
  );
}

export default SignIn;
