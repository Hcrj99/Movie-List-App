import React from 'react';
import './App.css';
import { ListMovies } from '../components/ListMovies';

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
        <div className ='aside__container-search'>
          <h3>Search movie</h3>
          <form>
            <input type = 'text' placeholder='Search movie'/>
            <input type = 'submit'/>
          </form>
        </div>
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
        <ListMovies/>
      </section>

      <footer>
        &copy; Movies App BIG SCREEN - <a href = '#'>Github</a>
      </footer>
    </div>
  );
}

export default App;
