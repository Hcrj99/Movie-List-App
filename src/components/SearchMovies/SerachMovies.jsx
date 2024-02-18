import React from 'react';

function SearchMovies() {

  const title = 'Search Movie';

  return (
    <>
    <div className ='aside__container-search'>
      <h3>{ title }</h3>
      <form>
        <input type = 'text' placeholder='Search movie'/>
        <input type = 'submit'/>
      </form>
    </div>
    </>
  );
}

export { SearchMovies };
