import React, { useEffect } from 'react';

function ListMovies () {

  const[moviesList, setMovieList] = React.useState([]);

  useEffect(() => {
    getSearchMovies();
  },[]);

  const getSearchMovies = () => {
    let itemLocal = JSON.parse(localStorage.getItem('movies'));
    setMovieList(itemLocal);
  };

  return (
    <>
      {moviesList!= null ? moviesList.map( movie => {
        return(
          <article key={movie.id} className = 'movies__container-movie-item'>
            <h3 className = 'movie__item-title' >{movie.title}</h3>
            <p className = 'movie__item-description'>{movie.description}</p>
            <button className = 'movie__item-edit'>Edit</button>
            <button className = 'movie__item-delete'>Delete</button>
          </article>
        );
      }) : <h2>Add movies please</h2>}
    </>
  );
}

export { ListMovies };