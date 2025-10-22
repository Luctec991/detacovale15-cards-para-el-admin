import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";

const Social = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "5493855833732";
  const message = "Hola! Me interesa conocer más sobre DETACOVALE15";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  const instagramUrl = "https://www.instagram.com/detacovale15/";

  const handleClick = () => {
    if (!open) {
      setOpen(true);
    } else {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".social-float")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div className="social-float">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`icon instagram ${open ? "visible" : ""}`}
        aria-label="Visitar Instagram"
      >
        <Icon icon="fa6-brands:instagram" />
      </a>

      <button
        onClick={handleClick}
        className={`icon whatsapp ${open ? "open" : ""}`}
        aria-label="Contactar por WhatsApp"
      >
        <Icon icon="fa6-brands:whatsapp" />
      </button>
    </div>
  );
};

export default Social;
