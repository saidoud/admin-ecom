import React from "react";
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
              error={touched["email"]}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors["email"]}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
            />
            <TextField
              error={touched["password"]}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={errors["password"]}
              id="password"
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
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
              onClick={() => console.log(touched["email"])}
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
