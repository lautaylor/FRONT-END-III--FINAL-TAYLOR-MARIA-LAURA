import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 const {id} = useParams();
 const [userData, setUserData] = useState(null); 

// Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

 useEffect (() => {
  fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then((response) => response.json ())
  .then((data) => setUserData(data))
  .catch((error) => console.error('Error al obtener los datos del usuario:', error));
 }, [id]);

 if (!userData) {
  return <p>Cargando...</p>
 }
  
  return (
    <>
      <h1>Detail Dentist ID {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Sitio Web</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
            <td>{userData.phone}</td>
            <td>{userData.website}</td>
          </tr>
        </tbody>
      </table>
    
    </>
  )
}

export default Detail
