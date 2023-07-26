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
import Card from "@mui/material/Card";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";

// Billing page components
import Task from "layouts/tasks/components/Task";

import { useArgonController,setTask } from "context";
import { useEffect, useState } from "react";

function TaskInformation() {
  
  const [controller,dispatch] = useArgonController();
  const {task} = controller;
  const {id} = task

  const [idTask, setIdTask] = useState(null)


  useEffect(() => {   
    setIdTask(id)

    if(id === idTask) {
        setIdTask(null)
        setTask(dispatch,{})    
    }
     
  }, [id])
  
 
  return (  
    <Card id={id}>
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" textTransform="capitalize" fontWeight="medium">
        Task Information
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
   
            {idTask ? 
                <Task /> :
                <ArgonTypography variant="h6" textTransform="capitalize" fontWeight="medium">
               Selecciona tarea
                </ArgonTypography>
            
        }
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default TaskInformation;
