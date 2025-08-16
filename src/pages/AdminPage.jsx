import { CategoriesGrid } from "../components/CategoriesGrid";
import { Header } from "../components/Header";
import { ProductTable } from "../components/ProductTable";

export const AdminPage = () => {
  return (
    <>
      <Header />
      <ProductTable />
      <CategoriesGrid></CategoriesGrid>
    </>
  );
};
