import { Routes, Route } from "react-router-dom";
import Header from "./components/global/Header";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";
import Artist from "./pages/Artist";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artist" element={<Artist />} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </div>
  );
}


export default App;

