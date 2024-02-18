import React from 'react';
import './App.css';
import { ListMovies } from '../components/ListMovies/ListMovies';
import { SearchMovies } from '../components/SearchMovies/SerachMovies';
import { AddMovies } from '../components/AddMovies/AddMovies';

function App() {

  const[moviesList, setMovieList] = React.useState([]);

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
        <SearchMovies moviesList={moviesList} setMovieList={setMovieList}/>
        <AddMovies setMovieList={setMovieList} movieList={moviesList}/>
      </aside>

      {/*movies catalog*/}
      <section className ='movies__container'>
        <ListMovies moviesList={moviesList} setMovieList={setMovieList}/>
      </section>

      <footer>
        &copy; Movies App BIG SCREEN - <a href = '#'>Github</a>
      </footer>
    </div>
  );
}

export default App;
