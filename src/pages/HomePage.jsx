import { Header } from "../components/Header";
import { ProductGrid } from "../components/ProductGrid";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className="my-4">
        <ProductGrid />
      </main>
    </>
  );
};
