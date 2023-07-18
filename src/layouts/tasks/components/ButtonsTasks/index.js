import { Icon } from '@mui/material'
import ArgonBox from 'components/ArgonBox'
import ArgonButton from 'components/ArgonButton'
import React from 'react'

export default function ButtonsTasks({icon,text,variant,color,id,action,removeTask,changeStateTask}) {

  console.log(removeTask)
  const hanndleBuutron = (e) => {
     
    if(action === removeTask){
      removeTask(id)
  } else if(action === changeStateTask) {
    changeStateTask(id)
  }
  }
  return (
     
        <ArgonButton variant={variant} color={color}  onClick={(e)=> { hanndleBuutron(e)

           

          }} >
          <Icon>{icon}</Icon>&nbsp; {text}
        </ArgonButton>
  )
}
