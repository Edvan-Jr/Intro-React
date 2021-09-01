import './App.css';
import img1 from "./assets/icone-lupa.svg";
import img2 from "./assets/icone-globo.svg";
import img3 from "./assets/icone-mapa.svg";

function App() {
  return (
    <div className="App">
      <div class="collections">
        <h1>Browse collections</h1>
        <div class="container">
          <div class="card esquerda">
            <img src={img1} alt="Ícone Lupa" />
            <h1>Search</h1>
            <p>Search in any topic you are interested and find any answers you need.</p>
            <a>Learn more about Search</a>
          </div>
          <div class="card meio">
            <img src={img2} alt="Ícone Globo" />
            <h1>Browser</h1>
            <p>Search in any topic you are interested and find any answers you need.</p>
            <a>Learn more about Browser</a>
          </div>
          <div class="card direita">
            <img src={img3} alt="Ícone Mapa" />
            <h1>Maps</h1>
            <p>Search in any topic you are interested and find any answers you need.</p>
            <a>Learn more about Maps</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
