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
import { useArgonController } from "context";
import { useEffect, useState } from "react";
import ArgonInput from "components/ArgonInput";
import ButtonsTasks from "../ButtonsTasks";

function Task({ id,title,name, description, state, noGutter, task, tasks , setTasks,setTask}) {
  const [controller] = useArgonController();
  const { darkMode } = controller;

  const [isEdit, setIsEdit] = useState(false)

  const [nameUpd, setNameUpd] = useState(name)
  const [descriptionUpd, setDescriptionUpd] = useState(description)

  useEffect(() => {
    setNameUpd(name)
    setDescriptionUpd(description)
    setTask(task)
  }, [task])
  

  const onChangeNameUpd=(value) => {
    setNameUpd(value)
  }
  const onChangeDescriptionUpd=(value) => {
    setDescriptionUpd(value)
  }

  const updateTask = (nameUpd,descriptionUpd) =>{ 
    if(isEdit){
      const updateTasks = tasks.map((t)=>{
          if(t.id === id){
              return {...t, name: nameUpd, description: descriptionUpd}
            }         
            
        return t
      })
      setTasks(updateTasks)		
    }
    }

    const changeStateTask = (id) =>{ 
          const updateTasks = tasks.map((t)=>{
            if(t.id === id){
                const newState = {...t, state: !state }
                setTask(newState)                
                return newState
              }      
              
          return t
        })
        setTasks(updateTasks)
        
     }

    const removeTask = (id) =>{ 
      const updateTasks = tasks.filter((newTasks) => newTasks.id !== id )
      setTasks(updateTasks);
      setTask(null)
  
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

            <ArgonTypography variant="button" fontWeight="medium" textTransform="capitalize">
              {title}
            </ArgonTypography>
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
              <ArgonButton variant="text" color="success" onClick={()=> { changeStateTask(id)}}>
                <Icon>check</Icon>&nbsp; Completar
              </ArgonButton>
            </ArgonBox>

            <ArgonBox mr={1}>
              <ArgonButton variant="text" color="dark" onClick={()=> {
                                                                      updateTask(nameUpd,descriptionUpd)
                                                                      setIsEdit(!isEdit)
                                                                }}>
                <Icon>edit</Icon>&nbsp;{isEdit ? 'Guardar' : 'Editar'}
              </ArgonButton>
            </ArgonBox>
            <ArgonBox mr={1}>
              <ArgonButton variant="text" color="error" onClick={()=> { removeTask(id)}}>
                <Icon>delete</Icon>&nbsp;Delete
              </ArgonButton>
            </ArgonBox>
          </ArgonBox>
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default values for the props of Bill
Task.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Task.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
  noGutter: PropTypes.bool,
};

export default Task;
