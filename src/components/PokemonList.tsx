import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { PokemonBasic, PokemonDetails } from "../types/types";

function PokemonList() {
  const [pokemons, setPokemons] = useState<PokemonDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState<PokemonDetails[]>([]);
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    {
      const stored = localStorage.getItem("favorites");
      if (stored) {
        setFavorite(JSON.parse(stored));
        setFlag(false);
      }
    }

    const loadPokemons = async (): Promise<void> => {
      try {
        const response: Response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=24"
        );
        if (!response.ok) throw new Error("Error to get data");
        const json = await response.json();

        const detailedPokemons: PokemonDetails[] = await Promise.all(
          json.results.map(async (p: PokemonBasic) => {
            const res = await fetch(p.url);
            if (!res.ok) throw new Error("Error to get data");
            return res.json();
          })
        );

        setPokemons(detailedPokemons);
      } catch (error) {
        console.error("Error to loading Pokemons:", error);
      } finally {
        setLoading(false);
      }
    };
    loadPokemons();
  }, []);

  useEffect(() => {
    if (flag) localStorage.setItem("favorites", JSON.stringify(favorite));
  }, [favorite]);

  if (loading) return <p className="text-light text-center">Cargando...</p>;

  const addFavorite = (pokemon: PokemonDetails): void => {
    const existFav = favorite.some((fav) => fav.id === pokemon.id);

    if (!existFav) {
      setFavorite([...favorite, pokemon]);
    } else {
      const aux: PokemonDetails[] = favorite.filter((f) => f.id !== pokemon.id);
      setFavorite(aux);
    }
    setFlag(true);
  };

  return (
    <section className="text-center text-light">
      <div className="container-fluid px-4">
        <h1 className="fw-bold mb-4">Pokémons List</h1>

        <div className="row g-3 justify-content-center">
          {pokemons.map((pokemon) => {
            return (
              <div
                key={pokemon.id}
                className="col-6 col-sm-4 col-md-3 col-lg-2"
              >
                <div className="card bg-dark text-white border-light h-100 shadow-sm">
                  <button
                    onClick={() => addFavorite(pokemon)}
                    className="btn btn-danger mx-5 mt-3"
                  >
                    <i
                      className={`bi ${
                        favorite.some((fav) => fav.id === pokemon.id)
                          ? "bi-heart-fill"
                          : "bi-heart"
                      }`}
                    ></i>
                  </button>
                  <Link to={`/PokemonDetail/${pokemon.id}`}>
                    <img
                      src={pokemon.sprites.front_default}
                      className="card-img-top p-3"
                      alt={pokemon.name}
                    />
                    <div className="card-body p-2">
                      <h6 className="card-title mb-0 text-capitalize">
                        {pokemon.name}
                      </h6>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PokemonList;
