import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";
import NavResponsive from "./NavResponsive";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [rol, setRol] = useState(localStorage.getItem("rol"));
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "token" || e.key === "rol") {
        setToken(localStorage.getItem("token"));
        setRol(localStorage.getItem("rol"));
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const cerrarSesion = () => {
    if (window.confirm("¿Estás seguro de que quieres cerrar sesión?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("rol");
      alert("✅ Sesión cerrada correctamente");
      setToken(null);
      setRol(null);
      navigate("/inicio");
    }
  };

  const props = { rol, token, cerrarSesion };

  return isMobile ? <NavResponsive {...props} /> : <NavMenu {...props} />;
};

export default Navbar;
