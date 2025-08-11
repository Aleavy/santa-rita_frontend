import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AdminPage } from "./pages/AdminPage";
import { CreateProductPage } from "./pages/CreateProductPage";
import { ProductView } from "./components/ProductView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/crear-producto" element={<CreateProductPage />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/producto/:id" element={<CreateProductPage />} />
        <Route path="/producto/ver/:id" element={<ProductView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
