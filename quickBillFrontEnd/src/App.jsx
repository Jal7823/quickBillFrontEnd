import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Asside from "./components/Asside";
import Content from "./components/Content";
import Footer from './components/Footer'
import Nabvar from "./components/Nabvar";

function App() {
  return (
    <BrowserRouter>
        <Nabvar />
      <Routes>
        <Asside />
        <Content />
        <Footer />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
