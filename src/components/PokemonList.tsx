import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface PokemonBasic {
  name: string;
  url: string;
}

interface PokemonDetail {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  height: number;
  weight: number;
}

function PokemonList() {
  const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPokemons = async (): Promise<void> => {
      try {
        const response: Response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=20"
        );
        if (!response.ok) throw new Error("Error to get data");
        const json = await response.json();

        const detailedPokemons: PokemonDetail[] = await Promise.all(
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

  if (loading) return <p className="text-light text-center">Cargando...</p>;

  return (
    <section className="text-center text-light">
      <div className="container">
        <h1 className="fw-bold mb-4">Pokémons List</h1>

        <div className="row g-3 justify-content-center">
          {pokemons.map((pok) => {
            return (
              <div key={pok.id} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="card bg-dark text-white border-light h-100">
                  <Link to={`/PokemonDetail/${pok.id}`}>
                    <img
                      src={pok.sprites.front_default}
                      className="card-img-top p-3"
                      alt={pok.name}
                    />
                    <div className="card-body p-2">
                      <h6 className="card-title mb-0 text-capitalize">
                        {pok.name}
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
