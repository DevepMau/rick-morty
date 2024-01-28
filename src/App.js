import imageRickMorty from "./img/rick-morty.png";
import './App.css';

function App() {

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');

    console.log(api);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        <img src={imageRickMorty} alt="Rock & Morty" className="img-home"/>
        <button onClick={reqApi} className="btn-search">
          Buscar Personajes
        </button>
      </header>
    </div>
  );
}

export default App;
