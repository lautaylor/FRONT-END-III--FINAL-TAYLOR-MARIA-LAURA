import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import { DentistContext } from "./utils/global.context";

{/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
{/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

const Card = ({name, username, id, isFavorite, removeFavorite}) => {
  const {dentist, changeDentist} = useContext(DentistContext);
  const isAlreadyFav = dentist.favoriteDentists.some((card) => card.id === id);
  
  const addFav = () => {
    try {
      // Agrega la Card en el localStorage
      if(!isAlreadyFav) {
      const selectedCard = {
          id,
          name,
          username
      };
      const updatedFavorite = [...dentist.favoriteDentists, selectedCard];
      localStorage.setItem ("favorites", JSON.stringify(updatedFavorite));
      changeDentist({...dentist,favoriteDentists:updatedFavorite })
      alert("Tarjeta agregada a favoritos");
      console.log("Tarjeta agregada a favoritos ID:",id , updatedFavorite);
      } else {
        alert("Esta tarjeta ya está en favoritos");
        } 
    } catch (error) {
          console.error("Error al agregar la tarjeta a favoritos:", error);
      } 
  }

  return (
    <div className={`card ${isAlreadyFav ? "favorite-card" : ""}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <img className="foto" width='100%' src="../images/doctor.jpg" alt="Doctor-imagen" />
      <Link to={`/dentist/${id}`}>
        <h2>{name}</h2>
      </Link>
        <p>{username}</p>
        <p>{id}</p>
        <button className='favButton' onClick={isFavorite ? () => removeFavorite(id) : addFav}>
          {isFavorite ? "Eliminar" : "Add Fav"}
        </button>
    </div>
  );
};

export default Card;


