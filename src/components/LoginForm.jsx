import { getAuthToken } from "../api/products.api";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { isUserLogged } from "../store/cart";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const { username, password } = data;

      const res = await getAuthToken({
        username,
        password,
      });
      localStorage.setItem("token", JSON.stringify(res.data.token));
      console.log(res);
      dispatch(isUserLogged());
      navigate("/");
    } catch (error) {
      if (error.response?.status === 400) {
        setError("Intenta de nuevo"); // ✅ guardamos mensaje de error
      } else {
        setError("Error inesperado"); // ✅ fallback
      }
    }
  });

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="sm:w-[50%] flex justify-baseline items-center h-fit w-[100%] sm:pt-14 pt-20 gap-10 sm:gap-16 flex-col shadow-2xl border-1 border-slate-300 rounded-xl p-5 "
      >
        <h2 className="self-center text-center w-[100%] text-3xl sm:text-4xl">
          Iniciar Sesion
        </h2>
        <div className="w-[100%] flex flex-col gap-6 sm:gap-12">
          <div className="flex  flex-col gap-6">
            <div className="lg:text-2xl text-xl w-[100%] flex flex-col">
              <label htmlFor="username" className="text-gray-600">
                <span className="text-gray-800 font-bold">*</span>Nombre de
                Usuario
              </label>
              <input
                className="self-center w-[95%] border-2 p-2 rounded"
                type="text"
                name="username"
                {...register("username", { required: true })}
              />
            </div>
            <div className="lg:text-2xl text-xl  w-[100%] flex flex-col">
              <label htmlFor="pass" className="text-gray-600">
                <span className="text-gray-800 font-bold">*</span>Contraseña
              </label>
              <input
                className="w-[95%] self-center border-2 p-2 rounded"
                type="password"
                name="pass"
                {...register("password", { required: true })}
              />
              {error && <span className="text-red-600">{error}</span>}
            </div>
          </div>
        </div>
        <button className="bg-green-400 rounded-2xl text-white p-1 font-bold w-40 text-xl">
          Guardar
        </button>
      </form>
    </>
  );
};
