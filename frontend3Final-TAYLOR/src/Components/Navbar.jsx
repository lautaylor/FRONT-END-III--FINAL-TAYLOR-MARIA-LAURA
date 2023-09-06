import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {Routes, Route} from "react-router-dom"
import Home from '../Routes/Home'
import Contact from '../Routes/Contact'
import Favs from '../Routes/Favs'
import Details from '../Routes/Detail'
import { ThemeContext }  from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <>
    <nav style={{background: theme.navbar.background,color: theme.navbar.font}}>
      <h3><span className="rojo">D</span>H ODONTO</h3>

      {/* Aqui deberan agregar los links correspondientes a las rutas definidas */}
      
      <div className='links'>
        <Link to='./home'>Home</Link>
        <Link to='./contact'>Contact</Link>
        <Link to='./favs'>Favs</Link>
      </div>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
     
      <button className='themeButton' 
      onClick={handleChangeTheme}
      style={{background: theme.background, color:theme.font}
      
    }
      >Change theme</button>
    </nav>
    
    <Routes>
      <Route path='/' element={<Home/>} /> 
      <Route path='/home' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/favs' element={<Favs/>} />
      <Route path='/dentist/:id' element={<Details />} />
    </Routes>
  </>
)
}

export default Navbar
