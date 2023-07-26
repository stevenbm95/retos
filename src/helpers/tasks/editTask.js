
import { useArgonController,setTasks,setTask } from "context";
import { useEffect, useState } from "react";

export const updateTask = (nameUpd,descriptionUpd) =>{ 

    const [controller,dispatch] = useArgonController();
    const {tasks,task} = controller;
  
    const { id, state} = task
  
    const [isEdit, setIsEdit] = useState(false)

        if(isEdit){
        const updateTasks = tasks.map((t)=>{
            if(t.id === id){
                return {...t, title: nameUpd, name: nameUpd, description: descriptionUpd}
                }         
                
      return t
  })

 return setTasks(dispatch,[...updateTasks])		
  }
}


export const changeStateTask = (props) =>{ 
    const [controller,dispatch] = useArgonController();
    const {tasks,task} = controller;
  
    const { id, state} = task
    
    const updateTasks = tasks.map((t)=>{
        if(t.id === id){
            const newState = {...t, state: !state }
            setTask(dispatch,newState)                
            return newState
        }      
        
    return t
    })

   return setTasks(dispatch,[...updateTasks])

}

export const removeTask = (props) =>{ 
    const [controller,dispatch] = useArgonController();
    const {tasks,task} = controller;
  
    const { id} = task
  
    const updateTasks = tasks.filter((newTasks) => newTasks.id !== id )
    setTasks(dispatch,updateTasks);
  return  setTask(dispatch,{})

    }
