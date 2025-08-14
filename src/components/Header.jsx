import { HamburguerMenu } from "./HamburguerMenu";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className="h-13 bg-cyan-400 px-4 py-2 flex flex-row content-center items-center">
        <nav className="sm:px-6 w-[100%] flex flex-row justify-between items-center">
          <HamburguerMenu></HamburguerMenu>
          <h2 className="sr-only sm:not-sr-only text-white text-base font-semibold">
            Categorias
          </h2>
          <Link to="/" className="w-[100%] text-center text-2xl font-bold font-serif text-white">
            <h2 className="w-[100%] text-center text-2xl font-bold font-serif text-white">
              Farmacia Vega
            </h2>
          </Link>
          <div className="bg-[url(/public/cart-shopping-regular-full.svg)] w-15 h-15 bg-no-repeat bg-center"></div>
        </nav>
      </header>
    </>
  );
};
