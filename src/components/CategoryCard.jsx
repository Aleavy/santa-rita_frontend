import { Link } from "react-router";

export const CategoryCard = ({ category, action }) => {
  function capitalize(stri) {
    let res = stri[0].toUpperCase() + String(stri).substring(1);
    return res;
  }

  return (
    <Link
      className="cursor-pointer ml-2 px-4 py-2 w-[100%] font-light hover:bg-amber-100/40 flex items-center text-base/7 text-black"
      to={`/productos/categoria/${category.name}`}
      onClick={action}
    >
      <div className="font-normal text-black/70">
        {capitalize(category.name)}
      </div>
    </Link>
  );
};
