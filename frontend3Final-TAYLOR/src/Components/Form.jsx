import { useState } from 'react'

function Form (props) {
    const [name, setName]   = useState('')
    const [email, setEmail] = useState ('')
    const [error, setError] = useState('')
     
    function handleSubmit(e) {
        e.preventDefault()
        if (!name || name.length<6) {
          console.error('Por favor, ingresa tu nombre')
          setError('Por favor, verifique su información nuevamente')
          return
        }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!email || !emailRegex.test(email)) {
          console.error('Por favor, ingresa un email válido')
          setError('Por favor, verifique su información nuevamente')
 
        } else {
        props.onDatos(name, email)     
        setError('')
        setName('')
      }
    }

  return (
    <div>
      <form className='formulario' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"></label>
          <input
            className='input'
            type="text"
            name="name"
            value={name}
            placeholder='Ingresá tu nombre completo'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input
            className='input'
            type="text"
            name="email"
            value={email}
            placeholder='Ingresá tu email'
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className='favButton' type='submit'>ENVIAR</button>
      </form>
      {error && <p className='error'>{error}</p>}
   </div>
  )  
}

export default Form