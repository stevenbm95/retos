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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Tooltip from "@mui/material/Tooltip";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI base styles
import borders from "assets/theme/base/borders";

import { useArgonController,setTask,setShowComponent } from "context";
import { useState } from "react";

function TaskList() {
  
    const { borderWidth, borderColor } = borders;
    const [controller, dispatch] = useArgonController();
    const {tasks,task,showComponent} = controller;


    const [styles, setStyles] = useState(null)  

    // const handleSelectTask = (t) => {
    //     t.id === task.id ? setTask(dispatch,{}) : setTask(dispatch,{...t,t})
    
    // }

    const handleSelectTask = (t) => {
       if( t.id === task.id)  {
        setStyles(t.id
            )
        setTask(dispatch,{})} else  {setTask(dispatch,{...t,t})}
    
    }
    const handleNewTask = () => {
                                
                                    setShowComponent(dispatch,false)
                                    setTask(dispatch,{})
                                }

   


  return (
            <Card>
            <ArgonBox pt={2} px={2} pb={2}  display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
                <ArgonTypography variant="h6"  fontWeight="medium">
                Lista De Tareas
                </ArgonTypography>
        
                <ArgonBox p={2}>
                <Grid container spacing={3}>
                    <Grid item className="item" xs={12} md={12}>
                    {
                        tasks.map((task)=>(
                            <ArgonBox
                            id={task.id}
                            border={`${borderWidth[1]} solid ${borderColor}`}
                            // className={styles ? '' : 'activeTask'}
                            style={task.id === styles ? {opacity: '0.5'} : {
                                
                            }}
                            borderRadius="lg"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            p={2}
                            mb={1}
                            key={task.id}
                            sx={{ cursor: "pointer" }}
                            onClick={()=>{
                            handleSelectTask(task)
                        
                            }}
                        >
                            <ArgonBox lineHeight={0}>
                                <Tooltip title="Select Task" placement="top">
                                    <Icon fontSize="small">
                                    check
                                    </Icon>
                                </Tooltip>
                            </ArgonBox> 
                                <ArgonTypography variant="h6" fontWeight="medium" >
                                {task.name}
                                </ArgonTypography>                  
                                            
                        </ArgonBox> 
                        ))
                    }
                
                    </Grid>
                </Grid>
                </ArgonBox>
                
                <ArgonButton variant="gradient" color="dark" onClick={()=>{ handleNewTask() }} >
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    &nbsp;Agregar Nueva Tarea
                </ArgonButton>
            </ArgonBox>

            </Card> 
  );
}

export default TaskList;
