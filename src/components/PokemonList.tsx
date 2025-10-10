function PokemonList() {
  return (
    <section className="text-center text-light">
      <div className="container">
        <h1 className="fw-bold mb-4">Lista de Pokémons</h1>

        <div className="row g-3 justify-content-center">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <div className="card bg-dark text-white border-light h-100">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${num}.png`}
                  className="card-img-top p-3"
                  alt={`Pokemon ${num}`}
                />
                <div className="card-body p-2">
                  <h6 className="card-title mb-0 text-capitalize">
                    Pokémon {num}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PokemonList;
