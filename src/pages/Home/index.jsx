import { Container, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

function Home() {
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Header open={open} toggleOpen={toggleOpen} />
      <SideBar open={open} toggleDrawer={toggleOpen} />
      {/* Main Content */}
      <Box component="main" className={classes.main}>
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography component="h1" variant="h6">
            Dashboard
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.grey[100],
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

export default Home;
