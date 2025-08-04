import { Header } from "../components/Header";
import { ProductGrid } from "../components/ProductGrid";

export const HomePage = () => {
  return (
    <>
      <Header url="public\logo.jpg" alt="logo" />
      <main className="my-4">
        <ProductGrid />
      </main>
    </>
  );
};
