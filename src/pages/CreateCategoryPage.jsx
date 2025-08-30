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
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setDisabled(true);
    const formData = new FormData();
    formData.append("name", data.name);
    try {
      await createCategory(formData);

    } catch (error) {
      console.log("Error al crear categoria", error);
    } finally {
      setValue('name', '')
      setTimeout(() => setDisabled(false), 1000);
    }
  });

  return (
    <>
      <form className="flex flex-col justify-center shadow  gap-4 px-10 py-6" onSubmit={onSubmit}>
        <h2 className="text-center w-full text-2xl">Crear Categoria</h2>
        <div className="text-lg flex flex-col justify-around w-full">
          <div className='border-1 w-full relative rounded'>
            <label className="absolute text-zinc-600 ml-3 text-base top-[-0.725rem] after:size-1 after:text-red-500 after:content-['*']" htmlFor="category">Categoria</label>
          <input
            className="w-full pl-2 p-2"
            type="text"
            name="category"
            {...register("name", { required: true })}
          />
          </div>
        </div>
        {errors.category && <span className="font-bold place-self-center text-red-500/90">Este campo es requerido</span>}
        <button disabled={disabled} className="p-1 w-full text-lg rounded bg-zinc-950 text-white">Guardar</button>
      </form>
    </>
  );
};
