import { Link } from "./Link";
import { HamburguerMenu } from "./HamburguerMenu";

export const Header = (props) => {
  return (
    <>
      <header className="h-13 bg-cyan-400 px-4 py-2 flex flex-row content-center items-center">
        <nav className="w-[100%] flex flex-row justify-between items-center">
          <h2 className="w-[100%] text-center text-2xl font-bold font-serif text-white">
            Farmacia Vega
          </h2>

          <HamburguerMenu></HamburguerMenu>
          <div className="bg-[url(/public/cart-shopping-regular-full.svg)] w-15 h-15 bg-no-repeat bg-center"></div>
          {/* <ul className="flex flex-row gap-4 justify-center content-center">
            <Link link="#" text="home" />
            <Link link="#" text="catalogo" />
            <Link link="#" text="entrega" />
          </ul> */}
        </nav>
      </header>
    </>
  );
};
