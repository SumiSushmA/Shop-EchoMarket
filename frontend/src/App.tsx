import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ErrorPage from "./pages/ErrorPage";

// import TestPage from "./pages/TestPage";
import AddToCart from "./pages/AddToCart";
import AllProducts from "./pages/AllProducts";
import { useContext } from "react";
import { UserContext } from "./context/UserContextProvider";
import CartPage from "./pages/CartPage";
import AdminProducts from "./pages/AdminProducts";
import AdminPanel from "./pages/AdminPanel";
import EditProduct from "./pages/EditProduct";
import UserProfile from "./pages/UserProfile";

function App() {
  const userContext = useContext(UserContext);
  return (
    <>
      <Routes>
        <Route path='/user/cart' element={<CartPage />} />
        <Route path='/user/profile' element={<UserProfile />} />
        <Route path='/admin/edit-product/:id' element={<EditProduct />} />
        <Route path='/products/all' element={<AllProducts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />

        <Route
          path='admin/add-to-cart'
          element={
            userContext?.isAuth ? (
              userContext?.role === "ROLE_ADMIN" ? (
                <AddToCart />
              ) : (
                <ErrorPage message='Internal server error' />
              )
            ) : (
              <ErrorPage message='You donot have acces to this page' />
            )
          }
        />
        <Route
          path='admin/products'
          element={
            userContext?.isAuth ? (
              userContext?.role === "ROLE_ADMIN" ? (
                <AdminProducts />
              ) : (
                <ErrorPage message='Internal server error' />
              )
            ) : (
              <ErrorPage message='You donot have acces to this page' />
            )
          }
        />
        <Route
          path='admin'
          element={
            userContext?.isAuth ? (
              userContext?.role === "ROLE_ADMIN" ? (
                <AdminPanel />
              ) : (
                <ErrorPage message='Internal server error' />
              )
            ) : (
              <ErrorPage message='You donot have acces to this page' />
            )
          }
        />
        <Route
          path='/cart'
          element={userContext?.isAuth ? <CartPage /> : <Login />}
        />
        <Route path='*' element={<ErrorPage message='Page Not Found' />} />
      </Routes>


    </>
  );
}

export default App;

