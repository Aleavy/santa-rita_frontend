import { Link } from "./Link";

export const Header = (props) => {
  function crossX() {
    const topLine = document.getElementById("1");
    const middleLine = document.getElementById("2");
    const bottomLine = document.getElementById("3");

    topLine.classList.toggle("right");
    middleLine.classList.toggle("middle");
    bottomLine.classList.toggle("left");
  }

  return (
    <>
      <header className="h-13 bg-cyan-400">
        <nav className="flex flex-row justify-around content-center">
          <div className="max-w-30">
            <img src={props.url} alt={props.alt} />
          </div>
          <div
            onClick={crossX}
            className="flex flex-col gap-2 justify-center cursor-pointer"
          >
            <div
              id="1"
              className="after:transition-opacity after:duration-700 after:ease-in after:absolute after:w-[24px] after:h-[5px] after:bg-white "
            ></div>
            <div
              id="2"
              className="before:transition-transform before:duration-300 before:ease-in after:transition-transform after:duration-300 after:ease-in before:absolute before:w-[24px] before:h-[5px] before:bg-white after:absolute after:w-[24px] after:h-[5px] after:bg-white "
            ></div>
            <div
              id="3"
              className="after:transition-opacity after:duration-700 after:ease-is after:absolute after:w-[24px] after:h-[5px] after:bg-white "
            ></div>
          </div>
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
