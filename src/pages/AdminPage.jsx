import { CategoriesGrid } from "../components/CategoriesGrid";
import { ProductTable } from "../components/ProductTable";
import { CreateCategoryPage } from "./CreateCategoryPage";
import { CreateProductPage } from "./CreateProductPage";
import { useState} from "react";


export const AdminPage = () => {
  const [viewProducts, setViewProducts] = useState(false)

  const [viewCategories, setViewCategories] = useState(false)
  const [createProduct, setCreateProuduct] = useState(false)
  const [createCategory, setCreateCategory] = useState(false)
  

  function handleShowProducts(){
     setViewProducts(true)
     setViewCategories(false)
     setCreateCategory(false)
     setCreateProuduct(false)
  }
    function handleShowCategories(){
     setViewProducts(false)
     setViewCategories(true)
     setCreateCategory(false)
     setCreateProuduct(false)
  }
    function handleShowCreateProduct(){
     setViewProducts(false)
     setViewCategories(false)
     setCreateCategory(false)
     setCreateProuduct(true)
  }
    function handleShowCreateCategory(){
     setViewProducts(false)
     setViewCategories(false)
     setCreateCategory(true)
     setCreateProuduct(false)
  }

  return (
    <div className="flex justify-center items-center flex-col mt-4 w-full h-full">
      <div className="flex justify-center items-center flex-col shadow-2xl  py-6 px-2 w-full h-full sm:w-[80%] gap-3">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 break-words">
          <button onClick={handleShowProducts} className="hover:cursor-pointer hover:bg-gray-100  border-1 p-2 sm:p-1 rounded">Ver Productos</button>
          <button onClick={handleShowCategories} className="hover:cursor-pointer hover:bg-gray-100  border-1 p-2 rounded">Ver Categorias</button>
          <button onClick={handleShowCreateProduct} className="hover:cursor-pointer hover:bg-gray-100  border-1 p-2 rounded">Crear Producto</button>
          <button onClick={handleShowCreateCategory} className="hover:cursor-pointer hover:bg-gray-100  border-1 p-2 rounded">Crear Categoria</button>
        </div>
        {createProduct && <CreateProductPage></CreateProductPage>}
        {viewProducts && <ProductTable />}
        {viewCategories &&<CategoriesGrid></CategoriesGrid>}
        {createCategory && <CreateCategoryPage/>}
      </div>
    </div>
  );
};
