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

import { useArgonController,setTask,setShowComponent,setTasks,setShowInfoTask } from "context";
import { Circle, CheckCircle } from "@mui/icons-material";
import { editTask } from "helpers/tasks/editTask";

function TaskList() {
  
    const { borderWidth, borderColor } = borders;
    const [controller, dispatch] = useArgonController();
    const {tasks,task,showComponent} = controller;

    const {changeStateTask} = editTask()

    const {state} = task

    const handleSelectTask = (t) => {
       if( t.id === task.id)  {                     
            setShowInfoTask(dispatch,false) 
            setTask(dispatch,{})
        } 
        else  {
            setShowInfoTask(dispatch,true) 
            setTask(dispatch,{...t,t})
                }
    
    }
    const handleNewTask = () => {                           
                                    setShowComponent(dispatch,false)
                                    setTask(dispatch,{})
                                }


    const handleChangeStateTask = () => changeStateTask()

   


  return (
            <Card>
            <ArgonBox pt={2} px={2} pb={2}  display="flex" flexDirection="column" justifyContent="space-between" alignItems="center">
                <ArgonTypography variant="h6"  fontWeight="medium">
                Lista De Tareas
                </ArgonTypography>
        
                <ArgonBox p={2}>
                <Grid container spacing={3}>
                    <Grid item className="List"  xs={12} md={12}>
                    {
                        tasks.map((t)=>(
                            <ArgonBox
                            id={t.id}
                            border={`${borderWidth[1]} solid ${borderColor}`}
                            className={ t.state ? 'Completed' : null}
                            borderRadius="lg"
                            display="flex"
                            alignItems="center"                        
                            mb={1}
                            key={t.id}
                            sx={ t.id === task.id ?  { backgroundColor: '#d6d8db', cursor: 'pointer'} : { cursor: 'pointer'} }
                           
                        >
                           {t.state ? <CheckCircle sx={{marginLeft: '1rem'}} onClick={()=>{changeStateTask(t.id)}}/> : <Circle sx={{marginLeft: '1rem'}} onClick={()=>{changeStateTask(t.id)}} /> }                            
                            <ArgonTypography  
                                className={ t.state ? 'Completed' : null}
                                sx={ t.id === task.id ?  { fontWeight: 'bold'} : { fontWeight: '400'}} 
                                variant="h6"
                                p={2}
                                fontWeight="medium"
                                onClick={()=>{
                                    handleSelectTask(t)                                
                                    }}
                            >
                            {t.name}
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
