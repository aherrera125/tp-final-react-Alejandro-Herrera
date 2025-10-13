import "../styles/Home.css";
import image1 from "..//../public/pokemon_one.png";
import image2 from "../../public/pokemon_two.png";
import image3 from "../../public/pokemon_three.png";

function Home() {
  return (
    <section className="text-center text-light">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="display-5 fw-bold mb-3">Bienvenido a PokeApp</h1>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={image1}
                  className="d-block w-100 carousel-img"
                  alt="Varios Pokémon juntos: Pikachu, Charmander y Bulbasaur"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image2}
                  className="d-block w-100 carousel-img"
                  alt="Varios Pokémon juntos: Pikachu, Charmander y Bulbasaur"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={image3}
                  className="d-block w-100 carousel-img"
                  alt="Varios Pokémon juntos: Pikachu, Charmander y Bulbasaur"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="card mt-5 mx-6 lead">
            <div className="card-body">
              <p className="card-text">
                Explora el mundo Pokémon: consulta listas, descubre detalles y
                aprende más sobre tus criaturas favoritas
              </p>
            </div>
          </div>
          <div className="card mt-5 mx-6 lead">
            <div className="card-body">
              <p className="card-text">
                Pagina web desarrollada como trabajo final Frontend para la
                diplomatura en desarrollo web realizada en UTN-BA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
