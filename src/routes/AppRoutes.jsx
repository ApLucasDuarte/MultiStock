import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import ProductsDetails from "../pages/ProductDetails";
import Channels from "../pages/Channels";
import Movements from "../pages/Movements";
import NotFound from "../pages/NotFound";

function AppRoutes (){
    return (
        <Routes>
            <Route path="/" element ={<Dashboard />}/>
            <Route path="/products" element ={<Products/>}/>
            <Route path="/products/:id" element={<ProductsDetails/>}/>
            <Route path="/channels" element={<Channels/>}/>
            <Route path="/movements" element={<Movements/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default AppRoutes