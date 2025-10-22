import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavResponsive = ({ rol, token, cerrarSesion }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className="nav-responsive">
      <button onClick={toggleMenu} className="hamburger">
        ☰
      </button>

      {open && (
        <div className="menu">
          {token && rol ? (
            <>
              <Link to="/inicio" onClick={toggleMenu}>
                <Icon icon="flat-color-icons:home" width="32" height="32" />{" "}
                Inicio
              </Link>

              {rol === "admin" && (
                <>
                  <Link to="/admin" onClick={toggleMenu}>
                    <Icon
                      icon="fluent-emoji-flat:gear"
                      width="32"
                      height="32"
                    />{" "}
                    Administración
                  </Link>
                  <Link to="/propietario" onClick={toggleMenu}>
                    <Icon icon="noto:office-building" width="32" height="32" />{" "}
                    Propietarios
                  </Link>
                  <Link to="/reservas" onClick={toggleMenu}>
                    <Icon icon="noto-v1:soccer-ball" width="32" height="32" />{" "}
                    Reservas
                  </Link>
                  <Link to="/perfil-propietario" onClick={toggleMenu}>
                    <Icon icon="entypo:user" width="32" height="32" /> Mi Perfil
                  </Link>
                </>
              )}

              {rol === "propietario" && (
                <>
                  <Link to="/propietario" onClick={toggleMenu}>
                    <Icon icon="flat-color-icons:home" width="32" height="32" />{" "}
                    Mi Panel
                  </Link>
                  <Link to="/reservas" onClick={toggleMenu}>
                    <Icon
                      icon="noto:magnifying-glass-tilted-left"
                      width="32"
                      height="32"
                    />{" "}
                    Ver Canchas
                  </Link>
                  <Link to="/perfil-propietario" onClick={toggleMenu}>
                    <Icon icon="entypo:user" width="32" height="32" /> Mi Perfil
                  </Link>
                </>
              )}

              {rol === "usuario" && (
                <>
                  <Link to="/reservas" onClick={toggleMenu}>
                    <Icon
                      icon="noto:magnifying-glass-tilted-left"
                      width="32"
                      height="32"
                    />{" "}
                    Buscar Canchas
                  </Link>
                  <Link to="/perfil-usuario" onClick={toggleMenu}>
                    <Icon icon="entypo:user" width="32" height="32" /> Mi Perfil
                  </Link>
                </>
              )}

              <button
                onClick={() => {
                  cerrarSesion();
                  toggleMenu();
                }}
                className="logout"
              >
                <Icon icon="noto:key" width="32" height="32" /> Cerrar Sesión
              </button>
            </>
          ) : (
            <>
              <Link to="/inicio" onClick={toggleMenu}>
                <Icon icon="flat-color-icons:home" width="32" height="32" />{" "}
                Inicio
              </Link>
              <Link to="/registro" onClick={toggleMenu}>
                <Icon
                  icon="streamline-ultimate-color:paper-write"
                  width="32"
                  height="32"
                />{" "}
                Registro Usuarios
              </Link>
              <Link to="/registro-propietarios" onClick={toggleMenu}>
                <Icon icon="noto:office-building" width="32" height="32" />{" "}
                Registro Propietarios
              </Link>
              <Link to="/reservas" onClick={toggleMenu}>
                <Icon icon="noto-v1:soccer-ball" width="32" height="32" />{" "}
                Reservas
              </Link>
              <Link to="/login" onClick={toggleMenu}>
                <Icon icon="noto:key" width="32" height="32" /> Iniciar Sesión
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default NavResponsive;
