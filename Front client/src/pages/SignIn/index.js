/**
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
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";


// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/tt.jpg";

function SignInBasic() {
  const [admin, setadmin] = useState("");

  const Navigate = useNavigate();
  const handleChange = (e) => {
    setadmin({ ...admin, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submitted");
    
    axios
      .post("http://localhost:5000/Client/login", admin)
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        localStorage.setItem("id", res.data.id);
        console.log(res.data.id);

        console.log(res.data.access_token);
        if (localStorage.getItem("access_token")) {
          Navigate(`/home/${res.data.id}`);
        }

        //  window.location.href = "/overview";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <DefaultNavbar routes={routes} transparent light sticky />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.1),
              rgba(gradients.dark.state, 0.2)
              )}, url(https://thumbs.dreamstime.com/b/gears-mechanism-concept-new-internet-web-technolog-d-illustration-gears-mechanism-concept-new-internet-web-technolog-d-195602613.jpg})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2} onChange={handleChange}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                S'identifier
                </MKTypography>
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="email" name="email" label="Email" fullWidth />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" name="password" label="mot de passe" fullWidth />
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton onClick={handleSubmit} variant="gradient" color="info" fullWidth>
                     Se connecter
                    </MKButton>
                  </MKBox>

                <MKBox mt={2} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                    Vous avez oublier Mot passe?{" "}
                      <MKTypography
                        component="a"
                        href="/oublier"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Oublier 
                      </MKTypography>
                    </MKTypography>
                  
                 <br></br>
                    <MKTypography variant="button" color="text">
                      Vous n&apos;avez pas de compte?{" "}
                      <MKTypography
                        component="a"
                        href="/pages/authentication/signUp"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        S'inscrire
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>
    </>
  );
}

export default SignInBasic;
