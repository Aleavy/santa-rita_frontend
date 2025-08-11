import { useForm } from "react-hook-form";
import {
  createProduct,
  getAllCategories,
  updateProduct,
  getProduct,
} from "../api/products.api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const CreateProductPage = () => {
  const [options, setOptions] = useState([]);
  const [selection, setSelection] = useState("");
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

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("image", imageFile);

    try {
      if (params.id) {
        await updateProduct(params.id, formData);
      } else {
        await createProduct(formData);
      }
      navigate("/admin");
    } catch (error) {
      console.log("Error al crear producto", error);
    }
  });

  useEffect(() => {
    async function loadProduct() {
      if (params.id) {
        const prod = await getProduct(params.id);
        console.log(prod.data);
        setValue("name", prod.data.name);
        setValue("image", prod.data.image);
        setValue("description", prod.data.description);
        setValue("price", prod.data.price);
        setValue("category", prod.data.category);
      }
    }
    loadProduct();
  }, []);

  const handleChange = (e) => {
    setSelection(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} encType="multipart/form-data">
        <h2 className="text-center">Crear Producto</h2>
        <input
          type="text"
          name="namep"
          placeholder="Nombre del Producto"
          {...register("name", { required: true })}
        />
        {errors.name && <span>Este campo es requerido.</span>}
        <textarea
          rows={3}
          type="text"
          name="description"
          placeholder="Descripcion"
          {...register("description", { required: true })}
        />
        {errors.description && <span>Descripcion es requerido.</span>}

        <select
          name=""
          id=""
          value={selection}
          {...register("category", { required: true })}
          onChange={handleChange}
        >
          <option value="">-- Seleciona una Categoria --</option>
          {options.map((optionC) => (
            <option key={optionC.id} value={optionC.id}>
              {optionC.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="price"
          placeholder="Precio..."
          {...register("price", { required: true })}
        />

        <input
          type="file"
          accept="image/png, image/jpeg"
          name="file"
          placeholder="Inserte imagen"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
};
