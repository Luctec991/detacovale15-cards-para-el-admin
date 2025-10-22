import { Icon } from "@iconify/react";
import SectionHome from "./SectionHome";

const Home = () => {
  return (
    <div className="container">
      <h1 className="title">
        <Icon icon="noto:trophy" width="64" height="64" />
        Bienvenido a DETACOVALE15
      </h1>
      <p className="descripcion-principal">
        La plataforma más fácil y confiable para gestionar reservas de canchas
        deportivas
      </p>
      <div className="seccion-dual">
        <SectionHome
          icono={<Icon icon="noto-v1:soccer-ball" width="32" height="32" />}
          titulo="Para Jugadores"
          subtitulo="🎯 Cómo reservar tu cancha:"
          pasos={[
            {
              icon: (
                <Icon
                  icon="noto:magnifying-glass-tilted-left"
                  width="32"
                  height="32"
                />
              ),
              text: (
                <>
                  <strong>Busca canchas cerca tuyo</strong> — Usa la
                  geolocalización o explora todas las opciones
                </>
              ),
            },
            {
              icon: (
                <Icon icon="flat-color-icons:calendar" width="32" height="32" />
              ),
              text: (
                <>
                  <strong>Elige fecha y horario</strong> - Selecciona el día y
                  hora que mejor te convenga
                </>
              ),
            },
            {
              icon: (
                <Icon
                  icon="mdi:check-circle-outline"
                  width="32"
                  height="32"
                  color="#32d358ff"
                />
              ),
              text: (
                <>
                  <strong>Confirma tu reserva</strong> - Completa tus datos y
                  asegura tu turno
                </>
              ),
            },
            {
              icon: (
                <Icon
                  icon="mdi:cellphone"
                  width="32"
                  height="32px"
                  color="#32d358ff"
                />
              ),
              text: (
                <>
                  <strong>Recibe confirmación</strong> - Mantén tu comprobante
                  siempre a mano
                </>
              ),
            },
          ]}
          consejos={[
            "🕐 Reserva con anticipación para mejores horarios",
            "📍 Verifica la ubicación antes de confirmar",
            "📞 Guarda el contacto del propietario",
          ]}
          botonIcono="🚀"
          botonTexto="Registrarse como Usuario"
          botonTo="/registro"
          fondoColor="#3b3b3bff"
        />

        <div className="columna-propietario">
          <div className="icono-seccion">🏢</div>
          <h2>Para Propietarios</h2>
          <div className="leyenda-container">
            <h3>🏪 Cómo publicar tu cancha:</h3>
            <ul className="lista-recomendaciones">
              <li>
                📝 <strong>Completa tu registro</strong> - Proporciona datos
                verificables y contacto (usa el nombre de la cancha)
              </li>
              <li>
                📍 <strong>Ubica tu cancha</strong> - Permite que la GPS detecte
                la ubicación exacta
              </li>
              <li>
                📸 <strong>Sube fotos atractivas</strong> - Hasta 5 imágenes de
                alta calidad
              </li>
              <li>
                ⚡ <strong>Gestiona reservas</strong> - Administra horarios y
                confirmaciones
              </li>
            </ul>

            <div className="tips-propietario">
              <h4>💡 Consejos para maximizar reservas:</h4>
              <ul>
                <li>📷 Usa fotos con buena iluminación</li>
                <li>📝 Describe claramente las características</li>
                <li>⏰ Mantén horarios actualizados</li>
                <li>💬 Responde rápido a consultas</li>
              </ul>
            </div>

            <a
              href="registro_propietarios.html"
              className="btn-accion btn-propietario"
            >
              🏆 Registrar mi Cancha
            </a>
          </div>
        </div>
      </div>

      <div className="acceso-rapido">
        <h3>⚡ Acceso Rápido</h3>
        <div className="botones-rapidos">
          <a href="reservas.html" class="btn-rapido btn-reservar">
            🔍 Buscar Canchas
          </a>
          <a href="login.html" class="btn-rapido btn-admin">
            ⚙️ Panel Administrativo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
