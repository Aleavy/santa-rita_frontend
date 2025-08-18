import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { CartTab } from "./CartTab";
import { useSelector } from "react-redux";
import { Footer } from "./Footer";

export const Layout = () => {
  const statusTabCart = useSelector((store) => store.cart.statusTab);

  return (
    <div>
      <main
        className={`max-w-full m-auto transform transition-transform duration-500
        ${statusTabCart === false ? "" : "-translate-x-56"}`}
      >
        <Header />
        <Outlet />
      </main>
      <CartTab />
      <Footer />
    </div>
  );
};
