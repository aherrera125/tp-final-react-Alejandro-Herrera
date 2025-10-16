import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { PokemonDetails } from "../types/types";

function Favorite() {
  const [favorite, setFavorite] = useState<PokemonDetails[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    {
      const stored = localStorage.getItem("favorites");
      if (stored) {
        setFavorite(JSON.parse(stored));
      }
    }
  }, []);

  return (
    <section className="text-center text-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {favorite.map((pokemon) => {
            return (
              <div
                key={pokemon.id}
                className="col-6 col-sm-4 col-md-3 col-lg-2"
              >
                <div className="card bg-dark text-white border-light h-100 shadow-sm">
                  <img
                    src={pokemon.sprites.front_default}
                    className="card-img-top p-3"
                    alt={pokemon.name}
                  />
                  <div className="card-body">
                    <h2 className="card-title fw-bold">{pokemon.name}</h2>
                    <p className="card-text">
                      tipo: {pokemon.types[0].type.name}
                      <br />
                      Altura: {pokemon.height} m | Peso: {pokemon.weight} kg
                    </p>
                    <button
                      className="btn btn-outline-light mt-3"
                      onClick={() => navigate(-1)}
                    >
                      ← Volver
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Favorite;
