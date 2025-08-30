import { HamburguerMenu } from "./HamburguerMenu";
import { Link } from "react-router-dom";
import { AccountMenu } from "./AccountMenu";
import SearchIcon from "../assets/images/search.svg";
import IconCart from "../assets/images/cart-shopping-regular-full.svg";
import { useState, useEffect } from "react";
import { toggleStatusTab, isUserLogged } from "../store/cart";
import { useSelector, useDispatch } from "react-redux";
import { SearchItem } from "./SearchItem.jsx";
import { getProductsByName } from "../api/products.api.js";

export const Header = () => {
  const isLogged = useSelector((store) => store.cart.isLogged);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const [searchProducts, setSearchProducts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const getProducts = async () => {
    const rest = await getProductsByName(searchText);
    setSearchProducts(rest.data);
  };

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  useEffect(() => {
    if (!(searchText.length > 1)) {
      return;
    }
    getProducts();
  }, [searchText]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };

  return (
    <>
      <header className="h-fit z-10 bg-cyan-400 px-4 py-2 flex flex-row content-center items-center sticky w-full top-0">
        <nav className="sm:px-6 w-[100%] h-full flex flex-row justify-between items-center ">
          <div className="flex justify-center items-center">
            <HamburguerMenu></HamburguerMenu>

            <h2 className="sr-only sm:not-sr-only text-white text-sm font-semibold">
              Categorias
            </h2>
          </div>
          <Link
            to="/"
            className="w-fit text-center text-2xl font-bold  text-white"
          >
            <h2 className="w-[100%] text-center text-2xl font-bold  text-white">
              Farmacia Vega
            </h2>
          </Link>
          <div className="bg-white relative w-fit rounded-2xl">
            <form action="" className="flex justify-center items-center py-1">
              <img src={SearchIcon} className="size-5 mx-2" alt="" />
              <input
                onChange={(e) => {
                  setSearchText(e.target.value);
                }}
                type="text"
                placeholder="Buscar productos.."
                className="border-0 focus:outline-0 placeholder:text-gray-400 pr-2"
              />
            </form>
            <div className="size-full absolute bg-red-500"></div>
          </div>
          {isLogged && <AccountMenu />}
          <div
            className="w-8 h-8 flex justify-center items-center rounded-full relative"
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
