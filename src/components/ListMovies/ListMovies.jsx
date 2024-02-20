import React, { useEffect } from 'react';
import { saveStorage } from '../../helper/saveLocalStorage';
import { EditMovie } from '../EditMovie/EditMovie';
import { EmptyMovies } from '../EmptyMovies/EmptyMovies';
import { LoadData } from '../LoadData/LoadData';

function ListMovies ({ moviesList, setMovieList }) {

  const [edit, setEdit] = React.useState(0);
  const [load, setLoad] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      getListMovies()
      setLoad(false);
    },2000);
  },[]);

  const getListMovies = () => {
    let itemLocal = JSON.parse(localStorage.getItem('moviesv1'));
    setMovieList(itemLocal);
    return itemLocal;
  };

  const saveItemsStorage = saveStorage('moviesv1', []);

  const deleteMovie = (id) => {
    //get movie data save
    let moviesLocal = getListMovies();

    //fliter data to deletee
    let newMovies = moviesLocal.filter((movies) => movies.id !== parseInt(id));
    //upgrade data localstorage
    setMovieList(newMovies);

    saveItemsStorage(newMovies);

  };
  
  return (
    <>
      {load && (<LoadData/>)}
      {moviesList !== null && moviesList.map( movie => {
        return(
          <article key={movie.id} className = 'movies__container-movie-item'>
            <h3 className = 'movie__item-title' >{movie.title}</h3>
            <p className = 'movie__item-description'>{movie.description}</p>
            <button onClick={() => setEdit(movie.id)} className = 'movie__item-edit'>Edit</button>
            <button onClick={() => deleteMovie(movie.id)} className = 'movie__item-delete'>Delete</button>

            {/*Edit movies*/}
            {edit === movie.id && (
              <EditMovie movie={movie} getMovies={getListMovies} setListMovies={setMovieList} setEdit={setEdit}/>
            )}

          </article>
        );
      })}
      {moviesList.length <= 0 && (<EmptyMovies/>)}
    </>
  );
}

export { ListMovies };