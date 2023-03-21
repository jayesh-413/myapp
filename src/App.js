import logo from "./logo.svg";
import "./App.css";
import ProductList from "./Component/ProductList";
import ProductDetails from "./Component/ProductDetails";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="productdetails/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
