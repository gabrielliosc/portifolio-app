import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Commission from "./pages/Comission";
import Products from "./pages/products/Products";
import NoPage from "./pages/NoPage";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="encomendas" Component={Commission} />
        <Route path="produtos" Component={Products} />
        {/* <Route path="tatuagem" Component={Tattoo}/>
        <Route path="outras" Component={Others} />
        <Route path="contato" Component={Contact} />  */}
        {/* <Route path="fase/:name" Component={Fase} /> */}
        <Route path="*" Component={NoPage} />
      </Routes>
    </BrowserRouter>
  );
}
