import { Link } from "react-router";

export const CategoryCard = ({ category }) => {
  function capitalize(stri) {
    let res = stri[0].toUpperCase() + String(stri).substring(1);
    return res;
  }

  return (
    <Link
      className="cursor-pointer ml-2 px-4 py-2 w-[100%] font-light hover:bg-amber-100/40 flex items-center text-base/7 text-black"
      to={`http://127.0.0.1:8000/api/v1/products/${category.name}/`}
    >
      <div>{capitalize(category.name)}</div>
    </Link>
  );
};
