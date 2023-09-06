import React, { useState, useMemo } from 'react'
import Layout from './Layout';
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { ThemeContext, themes, DentistContextProvider } from './Components/utils/global.context';
import './index.css'

function App() {
  const [theme,setTheme] = useState(themes.light);
  const handleChangeTheme = () =>  {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }
  const providerValue = useMemo(() => ({ theme, handleChangeTheme}),[theme,handleChangeTheme])
  
  return (
    <ThemeContext.Provider value={providerValue}>
      <DentistContextProvider>
        <Layout className="App">
          <Navbar/>
          <Footer/>
        </Layout>
      </DentistContextProvider>
    </ThemeContext.Provider>
  );
}

export default App;
