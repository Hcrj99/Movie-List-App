import React from 'react';
import { saveStorage } from '../../helper/saveLocalStorage';

function AddMovies ({ setMovieList, movieList }) {
  
  const tittleInit = 'Add Movie';

  const saveItemsStorage = saveStorage('moviesv1', []);

  const[ movieState, setMovie ] = React.useState({
    title : '',
    descriptionMovie : ''
  });

  const getDataForm = (event) => {
    event.preventDefault();// *Dont recharge web page
    //get data form
    let target = event.target;
    let title = target.movieTitle.value;
    let description = target.descriptionMovie.value;

    //create movie item
    let movie = {
      id: new Date().getTime(),
      title,
      description,
    };

    //save state
    setMovie(movie);

    let newMovies;
    //upgrade list movies
    if(movieList !== null){
      setMovieList( (item) => {
        newMovies = [...item];
        newMovies.push(movie);
        saveItemsStorage(newMovies);
        return newMovies;
      });
    }else{
      setMovieList(movie);
      saveStorage('moviesv1', movie);
    } 
  };


  return (
    <>
    <div className = 'add__container'>
      <h3 className = 'add__container-title'>{ tittleInit }</h3>

      {(movieState.title && movieState.description) && 
      <strong>{ "Create the movie: " + movieState.title}</strong>
      }
      
      <form onSubmit={getDataForm}>
        <input 
        type = 'text' 
        placeholder = 'Movie title'
        name='movieTitle'
        />
        <textarea 
        placeholder = 'Description movie'
        name='descriptionMovie'
        />
        <input type = 'submit'/>
      </form>
    </div>
    </>
  );
}

export { AddMovies };