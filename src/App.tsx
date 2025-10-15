import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";
import PokemonDetail from "./components/PokemonDetail";
import Favourite from "./components/favourite";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="PokemonList" element={<PokemonList />}></Route>
          <Route path="PokemonDetail/:id" element={<PokemonDetail />} />
          <Route path="Favorite" element={<Favourite />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
