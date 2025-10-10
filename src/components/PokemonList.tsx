import { useState, useEffect } from "react";

interface Pokemon {
  name: string;
  url: string;
}

function PokemonList() {
  const [data, setData] = useState<Pokemon[]>([]); // Array de Pokémon

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20") // Endpoint con datos de los Pokemons
      .then((res) => {
        if (!res.ok) throw new Error("HTTP " + res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Datos de Pokémon:", data.results);
        setData(data.results); // Guardamos el array de Pokémon
      })
      .catch((err) => console.error("Error en fetch:", err));
  }, []);

  // Función para extraer el ID del Pokémon a partir de la URL
  const getIdFromUrl = (url: string) => {
    const parts = url.split("/").filter(Boolean);
    return parts[parts.length - 1];
  };

  return (
    <section className="text-center text-light">
      <div className="container">
        <h1 className="fw-bold mb-4">Lista de Pokémons</h1>

        <div className="row g-3 justify-content-center">
          {data.map((d) => {
            const id = getIdFromUrl(d.url);
            return (
              <div key={d.name} className="col-6 col-sm-4 col-md-3 col-lg-2">
                <div className="card bg-dark text-white border-light h-100">
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    className="card-img-top p-3"
                    alt={`Pokemon ${d.name}`}
                  />
                  <div className="card-body p-2">
                    <h6 className="card-title mb-0 text-capitalize">
                      {d.name}
                    </h6>
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

export default PokemonList;
