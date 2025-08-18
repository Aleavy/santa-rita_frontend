import whatsIcon from "../assets/images/whatsapp.svg";

export const Footer = () => {
  return (
    <footer className="h-fit bg-cyan-400 px-4 py-2 flex flex-row content-center items-center w-full">
      <div>
        <h2>Nuestras Redes:</h2>
        <div>
          <img src={whatsIcon} alt="" />
          <a href="https://maps.app.goo.gl/SYBTsDjBvg5vDYyq8">
            Santa Rita Centro Calle España , Santa Rita, Paraguay
          </a>
        </div>
      </div>
    </footer>
  );
};
