import { Route, Routes } from "react-router-dom";
//components
import Asside from "./components/Asside";
import Nabvar from "./components/Nabvar";

//pages
import Ecommerce from "./pages/Ecommerce";
import Products from './pages/Products'
import Company from './pages/Company'

function App() {
  return (
    <>
      <Nabvar />
      <Asside />
      <Routes >
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/products" element={<Products />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </>
  );
}

export default App;
