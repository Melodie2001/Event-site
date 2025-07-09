import { Routes, Route } from "react-router-dom";
import Header from "./components/global/Header";
import Home from "./pages/Home";
import Redirect from "./pages/Redirect";
import Artist from "./pages/Artist";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
    </>
  );
}

export default App;

