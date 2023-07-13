
import { Switch } from '@mui/material'
import ArgonBox from 'components/ArgonBox'
import ArgonButton from 'components/ArgonButton'
import ArgonInput from 'components/ArgonInput'
import ArgonTypography from 'components/ArgonTypography'
import IllustrationLayout from 'layouts/authentication/components/IllustrationLayout'
import { useState } from 'react'
import {v4 as generarId} from 'uuid';


export default function CreateTask({createTask}) {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
 

  
  const isInvalid =() => (name.trim().length < 3 || description.trim().length < 3 ?  true : false)
  
  
  
  const onChangeName = (name) => {
    setName(name)
  } 
  const onChangeDescription = (description) => {
    setDescription(description)
  }  
  
  const handleCreateTask = (e) => {
    e.preventDefault()
    createTask({
      id: generarId(),
      name,
      description,
      state: false
    })
  }
    
  return (
    
    <ArgonBox component="form" role="form">
         <ArgonTypography textAlign="center" fontWeight="regular" mb={2} >
          Create Task
        </ArgonTypography>
      <ArgonBox mb={2}>
        <ArgonInput 
            type="text" 
            placeholder="Task Name" 
            size="large" 
            value={name}
            onChange={(e)=> onChangeName(e.target.value)} />
      </ArgonBox>
      <ArgonBox mb={2}>
        <ArgonInput 
            type="textarea" 
            placeholder="Task description" 
            size="large" 
            value={description} 
           
            onChange={(e)=>onChangeDescription(e.target.value) } />
      </ArgonBox>
      <ArgonBox mt={4} mb={1}>
        <ArgonButton  disabled={isInvalid()} color="success" size="medium" fullWidth onClick={(e)=> handleCreateTask(e)}>
          Crear Tarea
        </ArgonButton>
      </ArgonBox>
    </ArgonBox>
  )
}
