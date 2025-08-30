import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AdminPage } from "./pages/AdminPage";
import { Layout } from "./components/Layout";
import { CreateProductPage } from "./pages/CreateProductPage";
import { CreateCategoryPage } from "./pages/CreateCategoryPage";
import { ProductView } from "./components/ProductView";
import { LoginPage } from "./pages/LoginPage";
import { ProductsByCategoryPage } from "./pages/ProductsByCategoryPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {isUserLogged } from "./store/cart";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isUserLogged());
  }, [dispatch]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
            <Route path="/admin" 
            element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>} />
          
          <Route path="/producto/:id" element={
            <PrivateRoute>
              <CreateProductPage />
              </PrivateRoute>} />
          <Route
            path="/productos/categoria/:category"
            element={<ProductsByCategoryPage />}
          />
          <Route path="/producto/ver/:id" element={<ProductView />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
