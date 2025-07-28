import { Link } from "./Link";

export const Header = (props) => {
  return (
    <>
      <header className="h-13 bg-blue-400">
        <nav className="flex flex-row justify-around content-center">
          <div className="max-w-30">
            <img src={props.url} alt={props.alt} />
          </div>
          <ul className="flex flex-row gap-4 justify-center content-center">
            <Link link="#" text="home" />
            <Link link="#" text="catalogo" />
            <Link link="#" text="entrega" />
          </ul>
        </nav>
      </header>
    </>
  );
};
