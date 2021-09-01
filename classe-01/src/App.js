import './App.css';
import img1 from "./assets/icon-sedans.svg";
import img2 from "./assets/icon-suvs.svg";
import img3 from "./assets/icon-luxury.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="cards esquerda">
          <img src={img1} alt="Ícone sedan" />
          <h1>SEDANS</h1>
          <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on
            your next road trip.</p>
          <a>Learn More</a>
        </div>
        <div className="cards meio">
          <img src={img2} alt="Ícone suv" />
          <h1>SUVS</h1>
          <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and
            off-road adventures.</p>
          <a>Learn More</a>
        </div>
        <div className="cards direita">
          <img src={img3} alt="Ícone luxury" />
          <h1>LUXURY</h1>
          <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental
            and arrive in style. </p>
          <a>Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default App;
