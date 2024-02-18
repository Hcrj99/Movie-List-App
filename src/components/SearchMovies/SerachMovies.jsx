import React from 'react';

function SearchMovies( { moviesList, setMovieList } ) {
  const titleInit = 'Search Movie';

  const [search, setSearch] = React.useState('');
  const [dontResult, setDontresult] = React.useState(false);

  const searchMovie = (e) => {
    //create state + upgrade 
    setSearch(e.target.value);

    let findMovies = moviesList.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
    });

    if(search.length <= 1 || findMovies <= 0){
      findMovies = JSON.parse(localStorage.getItem('moviesv1'));
      setDontresult(true);
    }
    else{
      setDontresult(false);
    }

    setMovieList(findMovies);
  };

  return (
    <>
    <div className ='aside__container-search'>
      <h3>{ titleInit }</h3>
      {(dontResult && search.length > 1) && (
        <span className='dont__result'>
        No result has been found...
        </span>
      )}
      <form>
        <input 
        type = 'text' 
        placeholder='Search movie'
        name='search'
        autoComplete='off'
        onChange={searchMovie}/>
        <input type = 'submit'/>
      </form>
    </div>
    </>
  );
}

export { SearchMovies };
