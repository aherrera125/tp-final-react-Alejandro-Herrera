import { useLocation, useParams } from "react-router-dom";
import type { PokemonDetail } from "../types/pokemon";

function PokemonDetail() {
  const { state } = useLocation();
  const { pokemon } = (state || {}) as { pokemon?: PokemonDetail };
  const { id } = useParams();

  if (!pokemon) {
    return <p>No se encontró el Pokémon con id {id}</p>;
  }

  return (
    <section className="text-center text-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-12">
            <div className="card bg-dark text-white border-light shadow">
              <img
                src={pokemon.sprites.front_default}
                className="card-img-top p-4"
                alt={pokemon.name}
              />
              <div className="card-body">
                <h2 className="card-title fw-bold">{pokemon.name}</h2>
                <p className="card-text">
                  tipo: {pokemon.types[0].type.name}
                  <br />
                  Altura: {pokemon.height} m | Peso: {pokemon.weight} kg
                </p>
                {/*<button className="btn btn-outline-light mt-2">
                  Ver más detalles
                </button>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PokemonDetail;
