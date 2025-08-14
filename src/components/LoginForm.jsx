import { getAuthToken } from "../api/products.api";
import { useEffect } from "react";

export const LoginForm = ()=>{
  useEffect(()=>{
    const load = async ()=>{
      
        const res = await getAuthToken({username:'enzoe', password:'enzo'})
        .catch(error => {
          if (error.response.status == 400){
            return 'Try again'}
        })
        console.log(res)
    }
    load()
  }, [])


    return (
        <>
            <form action="" className="sm:w-[50%] sm:h-[80%] flex justify-baseline items-center h-[90%] w-[100%] sm:pt-14 pt-20 gap-10 sm:gap-16 flex-col shadow-2xl border-1 border-slate-300 rounded-xl p-5 ">
                <h2 className="self-center text-center w-[100%] text-3xl sm:text-4xl">Iniciar Sesion</h2>
                <div className="w-[100%] flex flex-col gap-6 sm:gap-12">
                  <div className="lg:text-2xl text-xl w-[100%] flex flex-col">
                    <label htmlFor="username" className="text-gray-600"><span className="text-gray-800 font-bold">*</span>Nombre de Usuario</label>
                    <input className="self-center w-[95%] border-2 p-2 rounded" type="text" name="username"  />
                  </div>
                  <div className="lg:text-2xl text-xl  w-[100%] flex flex-col">
                    <label htmlFor="pass" className="text-gray-600"><span className="text-gray-800 font-bold">*</span>Contraseña</label>
                    <input className="w-[95%] self-center border-2 p-2 rounded" type="password" name="pass"  />
                  </div>
                </div>


            </form>
        </>
    )
}