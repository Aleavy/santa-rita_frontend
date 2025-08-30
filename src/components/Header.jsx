import { HamburguerMenu } from "./HamburguerMenu";
import { Link } from "react-router-dom";
import { AccountMenu } from "./AccountMenu";
import IconCart from "../assets/images/cart-shopping-regular-full.svg";
import { useState, useEffect } from "react";
import { toggleStatusTab, isUserLogged } from "../store/cart";
import { useSelector, useDispatch } from "react-redux";

export const Header = () => {
  const isLogged = useSelector((store) => store.cart.isLogged);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <>
      <header className="h-fit z-10 bg-cyan-400 px-4 py-2 flex flex-row content-center items-center sticky w-full top-0">
        <nav className="sm:px-6 w-[100%] h-full flex flex-row justify-between items-center ">
          <div className="flex justify-center items-center">
            <HamburguerMenu></HamburguerMenu>

            <h2 className="sr-only sm:not-sr-only text-white text-base font-semibold">
              Categorias
            </h2>
          </div>
          <Link
            to="/"
            className="w-fit text-center text-2xl font-bold  text-white"
          >
            <h2 className="w-[100%] text-center text-3xl font-bold  text-white">
              Farmacia Vega
            </h2>
          </Link>
          {isLogged && <AccountMenu />}
          <div
            className="w-10 h-10 flex justify-center items-center rounded-full relative"
            onClick={handleOpenTabCart}
          >
            <img src={IconCart} alt="" className="" />
            <span className="absolute top-2/3 right-1/2 rounded-full bg-red-500 flex justify-center items-center text-sm text-white size-5">
              {totalQuantity}
            </span>
          </div>
        </nav>
      </header>
      
    </>
  );
};
