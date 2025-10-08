import { Outlet, Link, useLocation } from "react-router-dom";
import "../styles/Layout.css";

function Layout() {
  const location = useLocation();
  return (
    <div>
      <header className="header">
        <nav className="navigation">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Inicio
          </Link>
          <Link
            to="/Home"
            className={location.pathname === "Home" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to={"/PokemonList"}
            className={location.pathname === "PokemonList" ? "active" : ""}
          >
            PokemonList
          </Link>
          <Link
            to={"/PokemonDetail"}
            className={location.pathname === "PokemonDetail" ? "active" : ""}
          >
            PokemonDetail
          </Link>
        </nav>
      </header>
      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>&copy; 2025 Trabajo Practico Final</p>
      </footer>
    </div>
  );
}

export default Layout;
