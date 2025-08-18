import { Header } from "../components/Header";
import { ProductGrid } from "../components/ProductGrid";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      {console.log(localStorage)}
      <main className="my-4">
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
        <ProductGrid />
      </main>
    </>
  );
};
