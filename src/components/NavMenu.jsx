import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const NavMenu = ({ rol, token, cerrarSesion }) => {
  return (
    <nav className="navbar">
      {token && rol ? (
        <>
          <Link to="/inicio">
            <Icon icon="flat-color-icons:home" width="32" height="32" /> Inicio
          </Link>

          {rol === "admin" && (
            <>
              <Link to="/admin">
                <Icon icon="fluent-emoji-flat:gear" width="32" height="32" />{" "}
                Administración
              </Link>
              <Link to="/propietario">
                <Icon icon="noto:office-building" width="32" height="32" />{" "}
                Propietarios
              </Link>
              <Link to="/reservas">
                <Icon icon="noto-v1:soccer-ball" width="32" height="32" />{" "}
                Reservas
              </Link>
              <Link to="/perfil-propietario">
                <Icon icon="entypo:user" width="32" height="32" /> Mi Perfil
              </Link>
            </>
          )}

          {rol === "propietario" && (
            <>
              <Link to="/propietario">
                <Icon icon="flat-color-icons:home" width="32" height="32" /> Mi
                Panel
              </Link>
              <Link to="/reservas">
                <Icon
                  icon="noto:magnifying-glass-tilted-left"
                  width="32"
                  height="32"
                />{" "}
                Ver Canchas
              </Link>
              <Link to="/perfil-propietario">
                <Icon icon="entypo:user" width="32" height="32" /> Mi Perfil
              </Link>
            </>
          )}

          {rol === "usuario" && (
            <>
              <Link to="/reservas">
                <Icon
                  icon="noto:magnifying-glass-tilted-left"
                  width="32"
                  height="32"
                />{" "}
                Buscar Canchas
              </Link>
              <Link to="/perfil-usuario">
                <Icon icon="entypo:user" width="32" height="32" /> Mi Perfil
              </Link>
            </>
          )}

          <button onClick={cerrarSesion} className="logout">
            <Icon icon="noto:key" width="32" height="32" /> Cerrar Sesión
          </button>
        </>
      ) : (
        <>
          <Link to="/inicio" className="line">
            <Icon icon="flat-color-icons:home" width="32" height="32" /> Inicio
          </Link>
          <Link to="/registro" className="line">
            <Icon
              icon="streamline-ultimate-color:paper-write"
              width="32"
              height="32"
            />{" "}
            Registro Usuarios
          </Link>
          <Link to="/registro-propietarios" className="line">
            <Icon icon="noto:office-building" width="32" height="32" /> Registro
            Propietarios
          </Link>
          <Link to="/reservas" className="line">
            <Icon icon="noto-v1:soccer-ball" width="32" height="32" /> Reservas
          </Link>
          <Link to="/login" className="line">
            <Icon icon="noto:key" width="32" height="32" /> Iniciar Sesión
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavMenu;
