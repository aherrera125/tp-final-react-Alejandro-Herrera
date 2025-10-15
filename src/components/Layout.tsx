import { Outlet, Link, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand fw-bold">
              PokeApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/PokemonList"
                    className={`nav-link ${
                      location.pathname === "/PokemonList" ? "active" : ""
                    }`}
                  >
                    List
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/favourite"
                    className={`nav-link ${
                      location.pathname === "/Settings" ? "active" : ""
                    }`}
                  >
                    favourite
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow-1 bg-secondary bg-gradient d-flex justify-content-center main-padding">
        <div className="container text-center">
          <Outlet />
        </div>
      </main>

      <footer className="bg-dark text-white text-center py-3 shadow-sm mt-auto">
        <p className="mb-0">
          &copy; 2025 Trabajo Final Frontend – Diplomatura UTNBA
        </p>
      </footer>
    </div>
  );
}

export default Layout;
