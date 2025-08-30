import { Link } from "react-router-dom";
import personIcon from "../assets/images/user-solid-full.svg";

export const AccountMenu = () => {
  const toggleMenu = () => {
    const menu = document.getElementById("menuDrop");
    menu.classList.toggle("active");
  };

  return (
    <div className="relative">
      <div onClick={toggleMenu} className="flex justify-center items-center">
        <img src={personIcon} alt="" className="w-8" />
      </div>

      <div
        id="menuDrop"
        className="absolute flex flex-col -translate-x-[40%] border-b-1 border-gray-400 z-10 bg-cyan-400 rounded py-1 w-40 justify-center items-center"
      >
        <Link
          to="/admin"
          onClick={toggleMenu}
          className="hover:bg-blue-700/20 w-full text-center rounded text-white text-base font-semibold"
        >
          Admin
        </Link>
        <Link
          to="/"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
          className="hover:bg-blue-700/20 w-full text-center rounded text-white text-base font-semibold"
        >
          Cerrar Sesion
        </Link>
      </div>
    </div>
  );
};
