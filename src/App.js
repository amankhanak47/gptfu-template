/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
// import { useEffect } from "react";

// // react-router components
// import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// // @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "./assets/theme";
import Presentation from "./pages/Presentation";


export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     <Presentation/>
     </ThemeProvider>
    
  );
}
