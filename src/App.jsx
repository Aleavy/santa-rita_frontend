import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import { getAllProducts } from "./api/products.api";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const res = await getAllProducts();
      setProducts(res.data);
    };
    loadProducts();
  }, []);

  return (
    <>
      <Header url="public\logo.jpg" alt="logo" />
      <main>
        {products.map((product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <img src={product.image} alt="" />
          </div>
        ))}
      </main>
    </>
  );
}

export default App;
