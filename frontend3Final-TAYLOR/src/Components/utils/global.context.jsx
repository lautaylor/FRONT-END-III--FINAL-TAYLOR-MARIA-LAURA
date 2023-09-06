import React, { createContext, useEffect, useState } from "react";
//----------------TEMAS-----------------//
//Define los temas
export const themes = {
  light: {
    font: 'black',
    background: 'white',
    navbar: {
      background: 'white', 
      font: 'black', 
    },
  },
  dark: {
    font: 'white',
    background: 'darkgrey', 
    navbar: {
      background: 'grey', 
      font: 'white', 
    },
  },
}

//Crea el contexto de los temas
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  // Función para cambiar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
//----------------DENTISTAS----------------//

//Crea el contexto de dentista
export const DentistContext = createContext ();

// Define la función para buscar odontólogos
const fetchDentists = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('No se pudo obtener la lista de odontólogos');
    }
    const data = await response.json();
    return data; // Devuelve los datos de odontólogos
  } catch (error) {
    console.error('Error al buscar odontólogos:', error);
    throw error; // Puedes propagar el error para manejarlo en el componente que llama a esta función
  }
};

//Proveedor de contexto de dentista
export const DentistContextProvider = ({children}) => {
 
  // Función para obtener el dentista desde el almacenamiento local
  const getDentistFromStorage = () => {
    const localData = localStorage.getItem("dentist");
    return localData ? JSON.parse(localData) : {favoriteDentists: []};
  };

  // Estado del dentista
  const [dentist, setDentist] = useState(getDentistFromStorage());
  
  const changeDentist = (newDentist) => {
    setDentist(newDentist)
 }  

 // Efecto para guardar el dentista en el almacenamiento local
 useEffect (() => {
    setDentistInStorage(dentist);
  },[dentist]);
   
  const setDentistInStorage = (dentist) =>
    localStorage.setItem("dentist", JSON.stringify(dentist));
  
    const contextValue = {
      dentist,
      changeDentist,
      fetchDentists, // Agrega la función al contexto
    };

    return (
      <DentistContext.Provider value = {contextValue}>
        {children}
      </DentistContext.Provider>
    );
};

