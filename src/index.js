import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = extendTheme({
  breakpoints: {
    sm: "550px",
    md: "768px",
    lg: "1440px",
    xl: "1920px",
    "2xl": "2500px",
  },

  styles: {
    global: () => ({
      body: {
        bg: "",
      },
    }),
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

reportWebVitals();
