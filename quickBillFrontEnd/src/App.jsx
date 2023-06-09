import { Route, Routes } from "react-router-dom";
//components
import Asside from "./components/Asside";
import Nabvar from "./components/Nabvar";

//pages
import Ecommerce from "./pages/Ecommerce";
import Products from './pages/Products'
import Company from './pages/Company'
import Clients from "./pages/Clients";
import Employes from "./pages/Employes";

function App() {
  return (
    <>
      <Nabvar />
      <Asside />
      <Routes >
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/products" element={<Products />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/employes" element={<Employes />} />
        <Route path="/company" element={<Company />} />
      </Routes>
    </>
  );
}

export default App;
