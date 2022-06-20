import Pokemon from './Pokemon';
import pokemons from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className='lista'>
      { pokemons.map((ele) => <Pokemon key={ ele.id } pokemon={ ele }/>) }
      </div>
    </div>
  );
}

export default App;
