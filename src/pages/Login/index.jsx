import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SignIn from "../../components/Form/SignIn";

function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SignIn />
      </Box>
    </Container>
  );
}

export default Login;
