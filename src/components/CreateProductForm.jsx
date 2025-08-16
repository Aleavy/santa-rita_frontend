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
      navigate("/admin");
    } catch (error) {
      console.log("Error al crear producto", error);
    } finally {
      setTimeout(() => setDisabled(false), 1000);
    }
  });

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
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
    <div className="flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        encType="multipart/form-data"
        className="flex flex-col justify-center items-center border-4 border-amber-600"
      >
        <h2 className="text-center">Crear Producto</h2>
        <input
          type="text"
          name="namep"
          placeholder="Nombre del Producto"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Nombre es requerido.</span>}
        <textarea
          rows={3}
          type="text"
          name="description"
          placeholder="Descripcion"
          {...register("description", { required: true })}
        />
        {errors.description && <span>Descripcion es requerida.</span>}

        <select {...register("category", { required: true })}>
          <option value="">-- Seleciona una Categoria --</option>
          {options.map((optionC) => (
            <option key={optionC.id} value={optionC.id}>
              {optionC.name}
            </option>
          ))}
        </select>
        {errors.category && <span>Categoria es requerida.</span>}

        <input
          type="number"
          name="price"
          placeholder="Precio..."
          {...register("price", { required: true })}
        />
        {errors.price && <span>Precio es requerido.</span>}

        <input
          id="img"
          type="file"
          accept="image/png, image/jpeg"
          name="file"
          placeholder="Inserte imagen"
          {...register("image", { required: !params.id })}
        />
        {errors.image && <span>Imagen es requerida.</span>}
        <button disabled={disabled}>Guardar</button>
      </form>
    </div>
  );
};
