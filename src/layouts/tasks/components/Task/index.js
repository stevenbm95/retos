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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonButton from "components/ArgonButton";

// Argon Dashboard 2 MUI contexts
import { useArgonController,setTasks,setTask } from "context";
import { useEffect, useState } from "react";
import ArgonInput from "components/ArgonInput";
import BasicModal from "../Modal";
import { editTask } from "helpers/tasks/editTask";
// import { updateTask } from "helpers/tasks/editTask";
// import { updateTask } from "helpers/tasks/editTask";

function Task() {
 
  const [controller] = useArgonController();
  const {task, darkMode} = controller;

  const { id,name, description, state, noGutter} = task
  
  const {changeStateTask,updateTask} = editTask()
  
  const [isEdit, setIsEdit] = useState(false)
  const [nameUpd, setNameUpd] = useState(name)
  const [descriptionUpd, setDescriptionUpd] = useState(description)

  useEffect(() => {
    setNameUpd(name)
    setDescriptionUpd(description)
  }, [task])
  

  const onChangeNameUpd=(value) => setNameUpd(value)

  const onChangeDescriptionUpd=(value) => setDescriptionUpd(value)

  const handleChangeStateTask = () => changeStateTask()

  const handleUpdateTask = () => {
                                    setIsEdit(!isEdit)
                                    updateTask(nameUpd,descriptionUpd,isEdit)
                                }
  return (
    <ArgonBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
      sx={({ palette: { grey, background } }) => ({
        backgroundColor: darkMode ? background.default : grey[100],
      })}
    >
      <ArgonBox width="100%" display="flex" flexDirection="column">
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={1}
        >
        </ArgonBox>

         
        
        <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
           Task:&nbsp;&nbsp;&nbsp;
           {   isEdit ? <ArgonInput 
                        type="text" 
                        placeholder="Task Name" 
                        size="large" 
                        value={nameUpd}
                        onChange={(e)=> onChangeNameUpd(e.target.value)} />
                      : <ArgonTypography variant="caption" fontWeight="medium" textTransform="capitalize">
                          {nameUpd}
                        </ArgonTypography>  
            }
           
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mb={1} lineHeight={0}>
          <ArgonTypography variant="caption" color="text">
            Description:&nbsp;&nbsp;&nbsp;
            {   isEdit ? <ArgonInput 
                          type="textarea" 
                          placeholder="Task Description" 
                          size="large" 
                          value={descriptionUpd}
                          onChange={(e)=> onChangeDescriptionUpd(e.target.value)} /> 
                        : <ArgonTypography variant="caption" fontWeight="medium">
                            {descriptionUpd}
                          </ArgonTypography> 
            }
           
          </ArgonTypography>
        </ArgonBox>
        <ArgonTypography variant="caption" color="text">
          State:&nbsp;&nbsp;&nbsp;
          <ArgonTypography variant="caption" fontWeight="medium">
            {state ? 'Completada' : 'Pendiente'}
          </ArgonTypography>
        </ArgonTypography>
        <ArgonBox
            display="flex"
            alignItems="center"
            mt={{ xs: 2, sm: 0, md: 2}}
            ml={{ xs: -1.5, sm: 0 }}
        >
            
            <ArgonBox mr={1}>
              <ArgonButton variant="text" color="success" onClick={handleChangeStateTask}>
                <Icon>check</Icon>&nbsp;{task.state ? 'Completado' : 'Completar'}
              </ArgonButton>
            </ArgonBox>

            <ArgonBox mr={1}>
              <ArgonButton variant="text" color="dark" onClick={handleUpdateTask}>
                <Icon>edit</Icon>&nbsp;{isEdit ? 'Guardar' : 'Editar'}
              </ArgonButton>
            </ArgonBox>
            <ArgonBox mr={1}>
            {/* onClick={()=> { removeTask(id)}} */}
              <ArgonButton variant="text" color="error" >
                <Icon>delete</Icon><BasicModal/>              
              </ArgonButton>
                
            </ArgonBox>
          </ArgonBox>
      </ArgonBox>
    </ArgonBox>
  );
}

// // Setting default values for the props of Bill
// Task.defaultProps = {
//   noGutter: false,
// };

// // Typechecking props for the Bill
// Task.propTypes = {
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   state: PropTypes.bool.isRequired,
//   noGutter: PropTypes.bool,
// };

export default Task;
