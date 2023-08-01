import { BrowserRouter, Route, Routes } from "react-router-dom";

import StoreLayout from "./layout/StoreLayout";
import AuthLayout from "./layout/AuthLayout";

import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import Store from "./pages/Store";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import OrderTracking from "./pages/OrderTracking";
import Profile from "./pages/Profile";
import VerifyOtb from "./pages/Auth/VerifyOtb";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/verify" element={<VerifyOtb />} />
        </Route>

        <Route path="" element={<StoreLayout />}>
          <Route path="/" element={<Store />} />
          <Route path="/store" element={<Products />} />
          <Route path="/store/products/:id" element={<ProductDetails />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/tracking" element={<OrderTracking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
