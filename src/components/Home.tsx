function Home() {
  return (
    <section className="text-center text-light">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="display-5 fw-bold mb-3">Bienvenido a PokeApp</h1>
          <p className="lead">
            Explora el mundo Pokémon: consulta listas, descubre detalles y
            aprende más sobre tus criaturas favoritas.
          </p>
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
            alt="Pikachu"
            className="img-fluid mt-3"
            style={{ width: "120px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
