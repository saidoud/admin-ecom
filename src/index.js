import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import theme from "./theme";
import { CssBaseline } from "@mui/material";

const cache = createCache({
  key: "css",
  prepend: true,
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CacheProvider value={cache}>
        <CssBaseline />
        <App />
      </CacheProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
