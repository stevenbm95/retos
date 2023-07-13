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
import BaseLayout from "layouts/tasks/components/BaseLayout";
import TaskList from "layouts/tasks/components/TaskList";
import TaskInformation from "layouts/tasks/components/TaskInformation";
import CreateTask from "../tasks/components/CreateTask";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import { useState } from "react";


function Tasks() {

  const [tasks, setTasks] = useState([])

  
 
  const createTask = (task) => {
      setTasks([...tasks,task])
  }

  return (
    <DashboardLayout >
    <DashboardNavbar />
      <ArgonBox mt={4} >
        {/* <BaseLayout stickNavbar/> */}
        <ArgonBox mb={3}>
          <Grid container display="flex" justifyContent="space-around" alignItems="start">
     
                <Grid item  xs={12}  md={5}>
                  <TaskList tasks={tasks}/>
                </Grid>         
                <Grid item xs={12} md={5}>
                  <TaskInformation />
                </Grid>
                <Grid item xs={12} md={5}>
                   <CreateTask createTask={createTask}/>
                </Grid>

                
          </Grid>
        </ArgonBox>
      </ArgonBox>
    </DashboardLayout>    
  );
}

export default Tasks;