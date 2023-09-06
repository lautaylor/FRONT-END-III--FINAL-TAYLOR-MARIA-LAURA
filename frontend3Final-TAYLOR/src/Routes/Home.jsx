import React, { useEffect, useState, useContext } from 'react'
import Card from '../Components/Card'
import { DentistContext, themes, ThemeContext } from '../Components/utils/global.context'

// La API a utilizar sera la siguiente:
// `https://jsonplaceholder.typicode.com/users`

// Y para cada dentista en especifico:
// `https://jsonplaceholder.typicode.com/users/:id`

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const[cards, setCards] = useState([])
  const { fetchDentists } = useContext(DentistContext)
  const { theme } = useContext(ThemeContext);

  const themeClass = theme === themes.dark ? "dark" : "light";

    useEffect(() => {
      const fetchData = async () => {
        try {
          // Usa la función fetchDentists del contexto para obtener los datos
          const data = await fetchDentists();
          setCards(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [fetchDentists]); // Agrega fetchDentists como dependencia

    return (
    <main className={themeClass} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}

        {cards.map((user) => (

        <Card
          key={user.id}
          name={user.name}
          username={user.username}
          id={user.id}
          isFavorite={false}
        />

        ))}
      </div>
    </main>
  )
}

export default Home