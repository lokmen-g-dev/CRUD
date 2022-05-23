/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Author page sections
import Profile from "pages/Specialite/sections/Profile";
import Posts from "pages/Specialite/sections/Posts";
import Footer from "pages/Specialite/sections/Footer";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/r.jpg";

function Specialite() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      
     
    </>
  );
}

export default Specialite;
