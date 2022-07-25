import React from "react";


function GifDisplay({ gif, isFavorite, add, remove }) {
  const { gif_id, title, url } = gif;
  return (
    <div className="gif my-4 px-2 col-6 col-md-4 col-lg-3 d-flex flex-column justify-content-between">
      <h5 className="text-center">{title}</h5>
      <img className="img-fluid" src={url} alt={title} />
      {isFavorite && (
        <button
          onClick={() => remove(gif_id)}
          className="mt-4 btn btn-danger d-block mx-auto"
        >
          Remove Favorite
        </button>
      )}
      {!isFavorite && (
        <button
          onClick={() => add(gif)}
          className="mt-4 btn btn-success d-block mx-auto"
        >
          Add Favorite
        </button>
      )}
    </div>
  );
}



export default GifDisplay;