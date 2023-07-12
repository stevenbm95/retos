import { Switch } from '@mui/material'
import ArgonBox from 'components/ArgonBox'
import ArgonButton from 'components/ArgonButton'
import ArgonInput from 'components/ArgonInput'
import ArgonTypography from 'components/ArgonTypography'
import IllustrationLayout from 'layouts/authentication/components/IllustrationLayout'


export default function CrearTarea() {
  return (
    
    <ArgonBox component="form" role="form">
         <ArgonTypography textAlign="center" fontWeight="regular" mb={2} >
          Crear Tarea
        </ArgonTypography>
      <ArgonBox mb={2}>
        <ArgonInput type="text" placeholder="Nombre de tarea" size="large" onChange={()=> console.log('capurando')} />
      </ArgonBox>
      <ArgonBox mb={2}>
        <ArgonInput type="textarea" placeholder="Descripción de tarea" size="large" />
      </ArgonBox>
      <ArgonBox mt={4} mb={1}>
        <ArgonButton color="success" size="medium" fullWidth>
          Crear Tarea
        </ArgonButton>
      </ArgonBox>
    </ArgonBox>
  )
}
