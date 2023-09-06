import React, { useContext } from 'react'
import { ThemeContext }  from './Components/utils/global.context'

const Layout = ({children}) => {

   const {theme} = useContext(ThemeContext);

    return (
    <div style={{background: theme.background, color:theme.font}}>
        {children}
    </div>
    )}

export default Layout