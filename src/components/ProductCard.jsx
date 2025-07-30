export function ProductCard({ product }) {
  return (
    <div className="p-4 flex flex-col justify-center items-center border-[1px] border-gray-300 shadow-lg rounded-2xl">
      <a href="" className="mt-10 max-w-30">
        <img src={product.image} alt="" className="  object-cover" />
      </a>
      <div>
        <h1>{product.name}</h1>
      </div>
      <div>
        <p>{product.description}</p>{" "}
      </div>
    </div>
  );
}
