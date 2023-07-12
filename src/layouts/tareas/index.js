/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

// Billing page components
import BaseLayout from "layouts/tareas/components/BaseLayout";
import ListaTareas from "layouts/tareas/components/ListaTareas";
import InformacionTarea from "layouts/tareas/components/InformacionTarea";
import CrearTarea from "./components/CrearTarea";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";

function Tareas() {
  return (
    <DashboardLayout >
    <DashboardNavbar />
      <ArgonBox mt={4} >
        {/* <BaseLayout stickNavbar/> */}
        <ArgonBox mb={3}>
          <Grid container display="flex" justifyContent="space-around" alignItems="start">
     
                <Grid item  xs={12}  md={5}>
                  <ListaTareas />
                </Grid>         
                <Grid xs={12} md={5}>
                  <InformacionTarea />
                </Grid>
                <Grid xs={12} md={5}>
                   <CrearTarea />
                </Grid>

                
          </Grid>
        </ArgonBox>
      </ArgonBox>
    </DashboardLayout>    
  );
}

export default Tareas;
