
import { useArgonController,setTasks,setTask,setShowInfoTask } from "context";
import { useEffect, useState } from "react";

export function editTask() {
    const [controller,dispatch] = useArgonController();
    const {tasks,task} = controller;
    const { id, state} = task
 
    


    const changeStateTask =  () => { 
        
        const updateTasks = tasks.map((t)=>{
            if(t.id === id){
                const newState = {...t, state: !state }
                setTask(dispatch,newState)                
                return newState
            }            
            return t
        })
    
       setTasks(dispatch,[...updateTasks])    
    }

    const updateTask = (nameUpd,descriptionUpd,isEdit) => {
            if(isEdit){
            const updateTasks = tasks.map((t)=>{
                if(t.id === id){
                    return {...t, title: nameUpd, name: nameUpd, description: descriptionUpd}
                    }         
                    
          return t
      })    
      setTasks(dispatch,[...updateTasks])		
      }
    }

    
     const removeTask = () => { 
             
        const updateTasks = tasks.filter((newTasks) => newTasks.id !== id )
        setTasks(dispatch,updateTasks);
        setTask(dispatch,{})
        setShowInfoTask(dispatch,false)
    
        }
    

    return {changeStateTask,updateTask,removeTask}
}


    

    




