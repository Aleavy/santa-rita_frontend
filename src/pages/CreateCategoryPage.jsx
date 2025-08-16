import { useForm } from "react-hook-form";
import { createCategory } from "../api/products.api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const CreateCategoryPage = () => {
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setDisabled(true);
    const formData = new FormData();
    formData.append("name", data.name);
    try {
      await createCategory(formData);
      navigate("/admin");
    } catch (error) {
      console.log("Error al crear categoria", error);
    } finally {
      setTimeout(() => setDisabled(false), 1000);
    }
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <label htmlFor="category">Categoria</label>
        <input
          type="text"
          name="category"
          {...register("name", { required: true })}
        />
        {errors.category && <span>Este campo es requerido</span>}
        <button disabled={disabled}>Guardar</button>
      </form>
    </>
  );
};
