import { useForm } from "react-hook-form";
import {
  createProduct,
  getAllCategories,
  updateProduct,
  getProduct,
} from "../api/products.api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const CreateProductForm = () => {
  const [options, setOptions] = useState([]);
  const [title, setTitle] =   useState('Crear Producto')
  const [disabled, setDisabled] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();
  const params = useParams();


  useEffect(() => {
    const loadAllCategories = async () => {
      const res = await getAllCategories();
      setOptions(res.data);
    };
    loadAllCategories();
  }, []);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onBtnPress = () => {
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    setDisabled(true);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    if (data.image.length !== 0) {
      console.log(data);
      formData.append("image", data.image[0]);
    }
    try {
      if (params.id) {
        console.log(formData);
        await updateProduct(params.id, formData);
      } else {
        await createProduct(formData);
      }
      
    } catch (error) {
      console.log("Error al crear producto", error);
    } finally {
        setValue("name", '');
        setValue("description", '');
        setValue("price", '');
        setValue("category", '');
      setTimeout(() => setDisabled(false), 1000);
    }
  });

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        setTitle('Editar Producto')
        const prod = await getProduct(params.id);
        console.log(prod.data);
        setValue("name", prod.data.name);
        setValue("description", prod.data.description);
        setValue("price", prod.data.price);
        setValue("category", prod.data.category);
      }
    }
    loadProduct();
  }, []);

  return (
    <div className="mt-2 flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        encType="multipart/form-data"
        className="flex flex-col justify-center shadow  gap-3"
      >
        <h2 className="text-center w-full text-2xl">{title}</h2>
        <div className="text-lg flex flex-col justify-around px-5">
          <div className='border-1 w-full relative rounded'>
            <label className="absolute text-zinc-600 ml-3 text-base top-[-0.725rem] after:size-1 after:text-red-500 after:content-['*']" htmlFor="namep">Nombre</label>
            <input
              type="text"
              className="w-full pl-2 p-1"
              name="namep"
              {...register("name", { required: true })}
            />
          </div>
        </div>
        {errors.name && <span className="font-bold place-self-center text-red-500/90">Nombre es requerido.</span>}
        <div className="text-lg relative flex flex-col justify-around px-5">
          <div className="border-1 rounded w-full">
            <label className="absolute ml-3 text-base text-zinc-600 top-[-0.725rem] after:size-1 after:text-red-500 after:content-['*']" htmlFor="description">Descripcion</label>
            <textarea
              rows={3}
              className="w-full pl-2 p-1"
              type="text"
              name="description"
              {...register("description", { required: true })}
            />
          </div>
        </div>
        {errors.description && <span className="font-bold place-self-center text-red-500/90">Descripcion es requerida.</span>}
        <div className="text-lg relative flex flex-col justify-around px-5">
          <div className='border-1 w-full rounded'>
            <label className="absolute ml-3 text-base top-[-0.725rem] text-zinc-600 after:size-1 after:text-red-500 after:content-['*']" htmlFor="price">Precio</label>
            <input
            min={1}
            className="w-full pl-2 p-1"
            type="number"
            name="price"
            {...register("price", { required: true })}
          />
          </div>
        </div>
        {errors.price && <span className="font-bold place-self-center text-red-500/90">Precio es requerido.</span>}
        <div className="text-lg flex flex-col justify-around w-full px-5">
          <select {...register("category", { required: true })}>
            <option value="">-- Seleciona una Categoria --</option>
            {options.map((optionC) => (
              <option key={optionC.id} value={optionC.id}>
                {optionC.name}
              </option>
            ))}
          </select>
        </div>
        {errors.category && <span className="font-bold place-self-center text-red-500/90">Categoria es requerida.</span>}
        <div className="px-5 flex w-full">
            <input
            className="w-full hover:file:cursor-pointer file:text-base text-lg file:rounded file:bg-zinc-600 file:p-1 file:text-white"
            id="img"
            
            type="file"
            accept="image/png, image/jpeg"
            name="file"
            placeholder="Inserte imagen"
            {...register("image", { required: !params.id })}
            />
        </div>
   
        {errors.image && <span className="font-bold place-self-center text-red-500/90">Imagen es requerida.</span>}
        <button disabled={disabled} className="p-1 text-lg rounded bg-zinc-950 text-white">Guardar</button>
      </form>
    </div>
  );
};
