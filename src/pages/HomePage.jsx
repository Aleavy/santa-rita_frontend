import { Header } from "../components/Header";
import { ProductGrid } from "../components/ProductGrid";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className="my-4">
        <Link to="/admin">hellloo</Link>
        <ProductGrid />
      </main>
    </>
  );
};
