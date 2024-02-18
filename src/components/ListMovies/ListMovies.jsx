import React from "react";

function ListMovies () {
    return (
        <>
        <article className = 'movies__container-movie-item'>
          <h3 className = 'movie__item-title' >first movie</h3>
          <p className = 'movie__item-description'>good movie</p>
          <button className = 'movie__item-edit'>Edit</button>
          <button className = 'movie__item-delete'>Delete</button>
        </article>
        </>
    );
}

export { ListMovies };