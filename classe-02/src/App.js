import './App.css';
import picture from "./assets/gabriela.jpg";
import previusBtn from "./assets/icon-prev.svg";
import nextBtn from "./assets/icon-next.svg";

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <div className="text-wrapper">
          <p className="review-text">“Estive interessada em código por um tempo mas não tomava uma atitude, até agora. Não
            consigo recomendar esse curso o suficiente. Estou no trabalho dos meu sonhos e vejo um futuro
            brilhante!”</p>
          <div className="author__content-wrapper">
            <div className="author__name">Gabriela da Silva</div>
            <div className="author__title">Desenvolvedora Fullstack</div>
          </div>
        </div>

        <div className="carousel">
          <div className="carousel__img-wrapper">
            <img src={picture} alt="bootcamp graduate" className="carousel__img" />
          </div>
          <div className="carousel__btn-wrapper">
            <button id="btn-prev" className="btn btn--previous" onclick="pessoaAnterior()"><img
              src={previusBtn} alt="previous button" /></button>
            <button id="btn-next" className="btn btn--next" onclick="proximaPessoa()"><img src={nextBtn}
              alt="next button" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
