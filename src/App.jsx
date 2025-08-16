import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AdminPage } from "./pages/AdminPage";
import { CreateProductPage } from "./pages/CreateProductPage";
import { CreateCategoryPage } from "./pages/CreateCategoryPage";
import { ProductView } from "./components/ProductView";
import { LoginPage } from "./pages/LoginPage";
import { ProductsByCategoryPage } from "./pages/ProductsByCategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/crear-producto" element={<CreateProductPage />} />
        <Route path="/crear-categoria" element={<CreateCategoryPage />} />

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/producto/:id" element={<CreateProductPage />} />
        <Route
          path="/productos/categoria/:category"
          element={<ProductsByCategoryPage />}
        />
        <Route path="/producto/ver/:id" element={<ProductView />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
