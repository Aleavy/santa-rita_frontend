import { Header } from "./components/Header";
import { ProductGrid } from "./components/ProductGrid";

function App() {
  return (
    <>
      <Header url="public\logo.jpg" alt="logo" />
      <main className="mx-10 my-4">
        <ProductGrid />
      </main>
    </>
  );
}

export default App;
