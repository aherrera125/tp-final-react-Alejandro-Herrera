import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import type { PokemonDetails } from "../types/types";

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [favourite, setFavourite] = useState<PokemonDetails[]>([]);

  useEffect(() => {
    const raw = localStorage.getItem("favourite");
    if (raw) {
      try {
        const parsed: PokemonDetails[] = JSON.parse(raw);
        setFavourite(parsed);
      } catch (e) {
        console.error("Error parseando pokemons", e);
      }
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("Pokémon no encontrado");
          return res.json();
        })
        .then((data) => setPokemon(data))
        .catch(() => setPokemon(null))
        .finally(() => setLoading(false));
    }
  }, [id]);

  useEffect(() => {
    localStorage.setItem("favourite", JSON.stringify(favourite));
  }, [favourite]);

  if (loading) return <p className="text-white">Cargando...</p>;
  if (!pokemon)
    return <p className="text-white">No se encontró el Pokémon con ID {id}</p>;

  const fav = (pokemon: PokemonDetails): void => {
    setFavourite([...favourite, pokemon]);
  };

  return (
    <section className="text-center text-light">
      <div className="container-fluid">
        <div className="row justify-content-center mx-0">
          <div className="col-12 col-md-8 col-lg-3">
            <div className="card bg-dark text-white border-light shadow">
              <button
                onClick={() => {
                  fav(pokemon);
                }}
                className="btn btn-danger mx-5 mt-3"
              >
                <i className="bi bi-heart"></i>
              </button>
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
                <button
                  className="btn btn-outline-light mt-3"
                  onClick={() => navigate(-1)}
                >
                  ← Volver
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PokemonDetail;
