/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "../../../components/MKBox";
import MKBadge from "../../../components/MKBadge";
import MKTypography from "../../../components/MKTypography";

// Presentation page components
import ExampleCard from "../../../pages/Presentation/components/ExampleCard";

// Data
import data from "../../../pages/Presentation/sections/data/designBlocksData";

const api = new WooCommerceRestApi({
  url: "http://d.gptfu.com:6082",
  consumerKey: "ck_8513813441f57c5e0a00320d4bae0129b04e13da",
  consumerSecret: "cs_bb767302d72ba291b9a6ccd3e677988c38c75ee2",
  version: "wc/v3",
});

function DesignBlocks() {
  const [papers, setPapers] = useState([]);
  const [apps, setapps] = useState([]);
  const [news, setnews] = useState([]);

  useEffect(() => {
      api
    .get("products", { per_page: 10,category:686 })
    .then((response) => {
      console.log(response);
      setPapers(response.data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });

  api
    .get("products", { per_page: 10, category: 687 })
    .then((response) => {
      console.log("papers", response);
      setapps(response.data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
  
  api
    .get("products", { per_page: 10, category: 685 })
    .then((response) => {
      console.log("news", response);
      setnews(response.data);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
  }, []);
  // const renderData = data.map(({ title, description, items }) => (
  //   <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
  //     <Grid item xs={12} lg={3}>
  //       <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
  //         <MKTypography variant="h3" fontWeight="bold" mb={1}>
  //           {title}
  //         </MKTypography>
  //         <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
  //           {description}
  //         </MKTypography>
  //       </MKBox>
  //     </Grid>
  //     <Grid item xs={12} lg={9}>
  //       <Grid container spacing={3}>
  //         {/* { image, name, count, route, pro } */}
  //         {products.map((e) => (
  //           <Grid item xs={12} md={4} sx={{ mb: 2 }} key={e.name}>
  //             <Link to={e.permalink}>
  //               <ExampleCard image={e.images[1].src} name={e.name}  />
  //             </Link>
  //           </Grid>
  //         ))}
  //       </Grid>
  //     </Grid>
  //   </Grid>
  // ));

  return (
    <MKBox component="section" my={6} py={6}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", my: 6, mx: "auto", px: 0.75 }}
        >
          <MKBadge
            variant="contained"
            color="info"
            badgeContent="Infinite combinations"
            container
            sx={{ mb: 2 }}
          />
          <MKTypography variant="h2" fontWeight="bold">
            Huge collection of sections
          </MKTypography>
          <MKTypography variant="body1" color="text">
            We have created multiple options for you to put together and customise into pixel
            perfect pages.
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 6 }}>
        {/* {renderData} */}

        <Grid container spacing={3} sx={{ mb: 10 }}>
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                Apps
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                Best apps of gptfu
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Grid container spacing={3}>
              {/* { image, name, count, route, pro } */}
              {apps.map((e) => (
                <Grid item xs={12} md={4} sx={{ mb: 2 }} key={e.name}>
                  <Link to={e.permalink}>
                    <ExampleCard image={e.images[1].src} name={e.name} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        

        {/* papers */}
        <Grid container spacing={3} sx={{ mb: 10 }}>
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                Papers
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                Best Papers of gptfu
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Grid container spacing={3}>
              {/* { image, name, count, route, pro } */}
              {papers.map((e) => (
                <Grid item xs={12} md={4} sx={{ mb: 2 }} key={e.name}>
                  <Link to={e.permalink}>
                    <ExampleCard image={e.images[1].src} name={e.name} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>


        <Grid container spacing={3} sx={{ mb: 10 }}>
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                News
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                Best News of gptfu
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Grid container spacing={3}>
              {/* { image, name, count, route, pro } */}
              {news.map((e) => (
                <Grid item xs={12} md={4} sx={{ mb: 2 }} key={e.name}>
                  <Link to={e.permalink}>
                    <ExampleCard image={e.images[1].src} name={e.name} />
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        

      </Container>
    </MKBox>
  );
}

export default DesignBlocks;
