import React from 'react'
import Form from '../Components/Form'
import { useState } from 'react'
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const [elName, setElName] = useState('')
  const [elEmail, setElEmail] = useState('')
    
  function handleSubmit(name,email) {
  setElName(name)
  setElEmail(email)
}
  return (
    <div>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form onDatos={handleSubmit}/>
      {(elName) && (elEmail)? (
        <div>
          Gracias por tu contacto {elName}! Te responderemos cuanto antes al email: {elEmail}.
        </div>
      ): undefined}
     </div>
  )
}

export default Contact
