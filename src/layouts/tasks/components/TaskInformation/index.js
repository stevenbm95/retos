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
import { useEffect, useRef, useState } from "react";

function TaskInformation({task,tasks,setTasks,setTask}) {
 
  const {id,name,description,state} = task
  const objetoRef = useRef(task.id);
  const ultimoValorRef = useRef({});

  useEffect(() => {
    // Guardar el último valor del objeto cuando cambie
    ultimoValorRef.current.id = objetoRef.current.id;
    compararUltimoValor()
  }, [objetoRef.current.id]);





  const compararUltimoValor = () => {

  if (ultimoValorRef.current.id) {
    // Comparar el último valor con el valor actual del objeto
    if (ultimoValorRef.current.id === objetoRef.current.id) {
      // console.log('El valor del objeto no ha cambiado');
      // console.log(ultimoValorRef.current.id)
      // console.log(objetoRef.current.id)

    } else {
      // console.log('El valor del objeto ha cambiado');
      // console.log(ultimoValorRef.current.id)
      //  console.log(objetoRef.current.id)

    }
  }
  
  };



  return (


    <Card id={id} ref={objetoRef}>
      <ArgonBox pt={3} px={2}>
        <ArgonTypography variant="h6" textTransform="capitalize" fontWeight="medium">
        Task Information
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={1} pb={2} px={2}>
        <ArgonBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Task
            tasks={tasks}
            setTasks={setTasks}
            id={id}
            title={name}
            name={name}
            description={description}
            state={state}
            task={task}
            setTask={setTask}
          />
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default TaskInformation;
