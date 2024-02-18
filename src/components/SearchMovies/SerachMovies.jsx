import React from "react";

function SearchMovies() {
    return (
        <>
        <div className ='aside__container-search'>
          <h3>Search movie</h3>
          <form>
            <input type = 'text' placeholder='Search movie'/>
            <input type = 'submit'/>
          </form>
        </div>
        </>
    );
}

export { SearchMovies };
