import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Navigation from "./layouts/Navigation";
import Home from "./pages/Home";
import Footer from "./layouts/Footer";
import Authenticate from "./authentication";
import Activate from "./activate";
import Rooms from "./pages/Rooms";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import useLoadingWithRefresh from "./hooks/useLoadingWithRefresh";

function App() {
  const { loading } = useLoadingWithRefresh();
  return (
    <>
      <div>
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              theme: {
                primary: "#4aed88",
              },
            },
          }}
        />
      </div>
      <Router>
        <Navigation />
        <Routes>
          <Route element={<GuestRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/authenticate" element={<Authenticate />} />
          </Route>
          <Route element={<SemiProtectedRoute />}>
            <Route path="/activate" element={<Activate />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/rooms" element={<Rooms />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

const GuestRoute = () => {
  const { isAuth } = useSelector((state) => state.auth);
  return isAuth ? <Navigate to={"/rooms"} /> : <Outlet />;
};

const SemiProtectedRoute = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  return !isAuth ? (
    <Navigate to={"/"} />
  ) : isAuth && !user.activated ? (
    <Outlet />
  ) : (
    <Navigate to={"/rooms"} />
  );
};

const ProtectedRoute = () => {
  const { isAuth, user } = useSelector((state) => state.auth);
  return !isAuth ? (
    <Navigate to={"/"} />
  ) : isAuth && !user.activated ? (
    <Navigate to={"/activate"} />
  ) : (
    <Outlet />
  );
};

export default App;
