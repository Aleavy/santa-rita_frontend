export const HamburguerMenu = () => {
  function crossX() {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".offscreen-menu");

    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  }

  return (
    <>
      <div className="offscreen-menu">
        <ul>
          <li>hola</li>
          <li>como</li>
          <li>hola</li>
        </ul>
      </div>
      <div onClick={crossX} className="ham-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  );
};
