import { Link } from "./Link";

export const Header = (props) => {
  function crossX() {
    const topLine = document.getElementById("1");
    const middleLine = document.getElementById("2");
    const bottomLine = document.getElementById("3");

    topLine.classList.toggle("right");
    middleLine.classList.toggle("middle");
    bottomLine.classList.toggle("left");
    showMenu();
  }

  function showMenu() {
    const hamMenu = document.getElementById("ham-menu");
    const arrow = document.getElementById("arrow");
    arrow.classList.toggle("after:opacity-0");
    hamMenu.classList.toggle("ham-menu");
  }

  return (
    <>
      <header className="h-13 bg-cyan-400">
        <nav className="flex flex-row justify-around content-center">
          <div className="max-w-30">
            <img src={props.url} alt={props.alt} />
          </div>

          <div className="hamburguer-container relative flex flex-col justify-center content-center">
            <div
              id="ham-menu"
              className="cursor-default h-40 transition-opacity duration-300 ease-in
             ham-menu top-12 translate-x-[-40%] absolute bg-blue-700 w-40 z-2"
            >
              HIII
            </div>
            <div
              onClick={crossX}
              id="arrow"
              className="flex flex-col gap-2 justify-center cursor-pointer after:w-4 after:absolute after:transition-opacity after:duration-300 after:ease-in after:h-4 after:bg-white after:top-[44px] after:translate-x-[25%] after:opacity-0 after:z-[1] after:rotate-[45deg]"
            >
              <div
                id="1"
                className="after:transition-opacity after:duration-700 after:ease-in after:absolute after:w-[25px] after:h-[5px] after:bg-white "
              ></div>
              <div
                id="2"
                className="before:transition-transform before:duration-300 before:ease-in after:transition-transform after:duration-300 after:ease-in before:absolute before:w-[25px] before:h-[5px] before:bg-white after:absolute after:w-[25px] after:h-[5px] after:bg-white "
              ></div>
              <div
                id="3"
                className="after:transition-opacity after:duration-700 after:ease-is after:absolute after:w-[25px] after:h-[5px] after:bg-white "
              ></div>
            </div>
          </div>

          <div className="bg-[url(/public/cart-shopping-regular-full.svg)] w-10 bg-no-repeat bg-center"></div>
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
