import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import DashBoardLayout from "./layout/DashBoardLayout";

import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import VerifyOtb from "./pages/Auth/VerifyOtb";

import Home from "./pages/Home";
import Products from "./pages/Products/Products";
import AddProduct from "./pages/Products/AddProduct";
import Orders from "./pages/Orders/Orders";
import Themes from "./pages/Themes/Themes";
import Customers from "./pages/Customers/Customers";
import MobileApp from "./pages/MobileApp/MobileApp";
import Categories from "./pages/Categories/Categories";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import OrderDetails from "./pages/Orders/OrderDetails";
import Settings from "./pages/Settings/Settings";
import BasicSetting from "./pages/Settings/BasicSettings";
import Invoices from "./pages/Invoices/Invoices";
import PrintOrder from "./pages/Orders/PrintOrder";
import Complaints from "./pages/Reports/Reports";

function App() {
  const { user, token } = useSelector((state) => state.user);
  const ProtectedAdmin = ({ children }) => {
    if (token) {
      return children;
    }
    return <Navigate to="/auth/signin" />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/verify" element={<VerifyOtb />} />
        </Route>

        <Route
          path="/"
          element={
            <ProtectedAdmin>
              <DashBoardLayout />
            </ProtectedAdmin>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add-product" element={<AddProduct />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/orders/order-details/:id" element={<OrderDetails />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/basic" element={<BasicSetting />} />
          <Route path="/complaints" element={<Complaints />} />
        </Route>

        <Route path="/print/:id" element={<PrintOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
