import React, { useState, useEffect, useContext } from "react";
import Card from "../Components/Card";
import { DentistContext } from '../Components/utils/global.context';

const Favs = () => {
  const { dentist, changeDentist } = useContext(DentistContext);
  const [favorites, setFavorites] = useState(dentist.favoriteDentists);

  // Carga las tarjetas favoritas desde el localStorage
  const loadFavoritesFromLocalStorage = () => {
    try {
      const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
      setFavorites(storedFavorites);
      changeDentist({ ...dentist, favoriteDentists: storedFavorites });
    } catch (error) {
      console.error("Error al cargar las tarjetas favoritas:", error);
    }
  };

  // Carga las tarjetas favoritas al montar el componente y cuando se actualiza localStorage
  useEffect(() => {
    loadFavoritesFromLocalStorage();
  }, []);

  // Elimina una tarjeta favorita por su ID
  const removeFavorite = (id) => {
    try {
      const updatedFavorite = favorites.filter((fav) => fav.id !== id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorite));
      changeDentist({ ...dentist, favoriteDentists: updatedFavorite });
      setFavorites(updatedFavorite);
      console.log("Se eliminó la Card ID", id )
      changeDentist({...dentist, favoriteDentists: updatedFavorite})
      console.log(updatedFavorite)
     
    } catch (error) {
      console.error("Error al eliminar la tarjeta favorita:", error);
    } 
  };

  return (
    <div>
       <h1>Dentists Favs</h1>
        <div className='card-grid'>
        
        {favorites.map((fav) => (
          <div key={fav.id} className="divFavs">
          <Card 
            key={fav.id}
            name={fav.name}
            username={fav.username}
            id={fav.id}
            removeFavorite={removeFavorite}
            isFavorite={true}
            
           />
          </div>
       
        ))}
      </div>
    </div>
  );
};

export default Favs;
