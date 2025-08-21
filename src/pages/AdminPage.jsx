import { CategoriesGrid } from "../components/CategoriesGrid";
import { Header } from "../components/Header";
import { ProductTable } from "../components/ProductTable";
import { Link } from "react-router-dom";

export const AdminPage = () => {
  return (
    <>
     <Link to='/crear-producto'>Crearss</Link>
      <ProductTable />
      <CategoriesGrid></CategoriesGrid>
    </>
  );
};
