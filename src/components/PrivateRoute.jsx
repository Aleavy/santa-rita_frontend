import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isLogged = useSelector((state) => state.cart.isLogged);

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;