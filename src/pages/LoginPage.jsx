import { Header } from "../components/Header";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
  return (
    <>
      <div className="h-[100vh] flex sm:justify-center sm:items-center">
        <LoginForm></LoginForm>
      </div>
    </>
  );
};
