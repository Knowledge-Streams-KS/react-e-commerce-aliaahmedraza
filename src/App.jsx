import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from "./components/header/Header";
import PrivateRoutes from "./routes/PrivateRoutes";
import Carts from "./pages/carts";
import FormValidation from "./formvalidation";
import Login from "./pages/login";
import Signup from "./pages/signup";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/form" element={<FormValidation/>}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products/:categoryName?" element={<Product />}></Route>
        <Route path="/categories" element={<Categories />}></Route>
        <Route path="/productdetails/:id?" element={<ProductDetails />}></Route>
        <Route path="/Private" element={<PrivateRoutes>
        <Carts></Carts></PrivateRoutes>}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
