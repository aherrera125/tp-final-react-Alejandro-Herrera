import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import Layout from "./components/Layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" index element={<Home />} />
          <Route path="/PokemonList" element={<PokemonList />} />
          <Route path="/PokemonDetail" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
