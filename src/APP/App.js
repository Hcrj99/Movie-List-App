import React from 'react';
import './App.css';

function App() {
  return (
    <div className='app'>
      {/*header section*/}
      <header className ='header__container'>
        <div className='logo__container'>
          <div className='logo__container-play'></div>
        </div>
        <h1>BIG SCREEN</h1>
      </header>

      {/* nav section */}
      <nav className ='nav__container'>
        <ul>
          <li><a href ='#'>Home</a></li>
          <li><a href ='#'>Movies</a></li>
          <li><a href ='#'>Blog</a></li>
          <li><a href ='#'>Contact</a></li>
        </ul>
      </nav>

      <aside className ='aside__container'>
        <div className ='aside__container-search'>Search</div>
        <form>
          <input type = 'text'/>
          <button>Search</button>
        </form>
        <div className = 'add__container'>
          <h3 className = 'add__container-title'>Add Movies</h3>
          <form>
            <input type = 'text' placeholder = 'Movie title'/>
            <textarea placeholder = 'Description movie'></textarea>
            <input type = 'submit'/>
          </form>
        </div>
      </aside>

      {/*movies catalog*/}
      <section className ='movies__container'>
        <article className = 'movies__container-movie-item'>
          <h3 className = 'movie__item-title' >first movie</h3>
          <p className = 'movie__item-description'>good movie</p>
          <button className = 'movie__item-edit'>Edit</button>
          <button className = 'movie__item-delete'>Delete</button>
        </article>
        <article className = 'movies__container-movie-item'>
          <h3 className = 'movie__item-title' >first movie</h3>
          <p className = 'movie__item-description'>good movie</p>
          <button className = 'movie__item-edit'>Edit</button>
          <button className = 'movie__item-delete'>Delete</button>
        </article>
        <article className = 'movies__container-movie-item'>
          <h3 className = 'movie__item-title' >first movie</h3>
          <p className = 'movie__item-description'>good movie</p>
          <button className = 'movie__item-edit'>Edit</button>
          <button className = 'movie__item-delete'>Delete</button>
        </article>
      </section>

      <footer>
        &copy; Movies App BIG SCREEN - <a href = '#'>Github</a>
      </footer>
    </div>
  );
}

export default App;
