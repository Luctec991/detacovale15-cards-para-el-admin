import Button from "./Button";

const SectionHome = ({
  icono,
  titulo,
  subtitulo,
  pasos,
  consejos,
  fondoColor,
  botonTexto,
  botonIcono,
  botonTo,
}) => {
  return (
    <div className="columna-info" style={{ backgroundColor: fondoColor }}>
      <div className="icono">{icono}</div>
      <h2 className="h2">{titulo}</h2>
      <div className="leyenda-container">
        <h3 className="h3">{subtitulo}</h3>
        <ul className="lista-recomendaciones">
          {pasos.map((p, i) => (
            <li key={i}>
              <span>{p.icon}</span>
              <span>{p.text}</span>
            </li>
          ))}
        </ul>

        <div className="tips">
          <h4 className="text-lg font-semibold mb-2">
            💡 Consejos para una mejor experiencia:
          </h4>
          <ul>
            {consejos.map((t, i) => (
              <li key={i} className="inLine">
                <span className="mt-1">{t.icon}</span>
                <span>{t.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button icono={botonIcono} texto={botonTexto} to={botonTo} />
    </div>
  );
};

export default SectionHome;
