import React from "react";

function AddMovies () {
    return (
        <>
        <div className = 'add__container'>
          <h3 className = 'add__container-title'>Add Movies</h3>
          <form>
            <input type = 'text' placeholder = 'Movie title'/>
            <textarea placeholder = 'Description movie'></textarea>
            <input type = 'submit'/>
          </form>
        </div>
        </>
    );
}

export { AddMovies };