import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import DashBoardLayout from "./layout/DashBoardLayout";
import Loading from "./pages/Loading";
import NotFound from "./pages/NotFound";

const SignUp = lazy(() => import("./pages/Auth/SignUp"));
const SignIn = lazy(() => import("./pages/Auth/SignIn"));
const VerifyOtb = lazy(() => import("./pages/Auth/VerifyOtb"));

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products/Products"));
const AddProduct = lazy(() => import("./pages/Products/AddProduct"));
const Orders = lazy(() => import("./pages/Orders/Orders"));
const Themes = lazy(() => import("./pages/Themes/Themes"));
const Customers = lazy(() => import("./pages/Customers/Customers"));
const MobileApp = lazy(() => import("./pages/MobileApp/MobileApp"));
const Categories = lazy(() => import("./pages/Categories/Categories"));
const OrderDetails = lazy(() => import("./pages/Orders/OrderDetails"));
const Settings = lazy(() => import("./pages/Settings/Settings"));
const BasicSetting = lazy(() => import("./pages/Settings/BasicSettings"));
const Invoices = lazy(() => import("./pages/Invoices/Invoices"));
const PrintOrder = lazy(() => import("./pages/Orders/PrintOrder"));
const Complaints = lazy(() => import("./pages/Reports/Reports"));

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
      <Suspense fallback={<Loading />}>
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
            <Route
              path="/orders/order-details/:id"
              element={<OrderDetails />}
            />
            <Route path="/customers" element={<Customers />} />
            <Route path="/mobile-app" element={<MobileApp />} />
            <Route path="/themes" element={<Themes />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/basic" element={<BasicSetting />} />
            <Route path="/complaints" element={<Complaints />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="/print/:id" element={<PrintOrder />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
