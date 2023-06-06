import { useState } from "react";
import "./App.css";
import imageRick from "./img/rick_morty.gif";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();

    setCharacters(characterApi.results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="animated-title">Rick & Morty</h1>
        {characters ? (
        <Characters characters={characters} setCharacters={setCharacters}/>
        ) : (
          <>
          <img src={imageRick} alt="Rick & Morty gif" className="img-home" />
          <button onClick={reqApi} className="btn-search">
            Buscar Personajes
          </button>
          </>
        )}
        
        
      </header>
    </div>
  );
}

export default App;
