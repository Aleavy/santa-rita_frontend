import { Header } from "../components/Header";
import { ProductGrid } from "../components/ProductGrid";
import { Link } from "react-router-dom";
import { Slider } from "../components/Slider";

export const HomePage = () => {
  return (
    <>
      {console.log(localStorage)}
      <main className="lg:mx-40">
        <Slider></Slider>
        <div className="flex justify-center items-center bg-white text-zinc-900 text-xl h-20">
          <h2>Catalogo</h2>
        </div>
        <ProductGrid/>
      </main>
    </>
  );
};
