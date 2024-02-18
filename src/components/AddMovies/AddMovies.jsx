import React from 'react';

function AddMovies () {
  
  const tittleInit = 'Add Movie';

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

    setMovie(movie);
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
        ></textarea>
        <input type = 'submit'/>
      </form>
    </div>
    </>
  );
}

export { AddMovies };