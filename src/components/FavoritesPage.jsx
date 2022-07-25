import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { UserContext } from "../context/UserContext";
import GifDisplay from "./GifDisplay";

function FavoritesPage() {
  const { favorites, add, remove } = useContext(FavoritesContext);

  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="d-flex flex-wrap justify-content-center">
      <h1 className="my-4 col-12 text-center">Favorites</h1>
      <h1 className="my-4 col-12 text-center">Favorites for {loggedInUser}</h1>

      <div className="col-12 d-flex flex-wrap mt-4">
        {favorites &&
          favorites.length > 0 &&
          favorites.map((g) => (
            <GifDisplay
              gif={g}
              key={g.gif_id}
              add={add}
              remove={remove}
              isFavorite={true}
            />
          ))}
        {favorites.length === 0 && (
          <h3 className="text-center col-12">
            No Favorites Added. Go Back To Search and Add
          </h3>
        )}
      </div>
    </div>
  );
}
export default FavoritesPage;





