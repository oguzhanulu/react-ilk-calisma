import React from "react";
import { useLocation } from "react-router-dom";

function PageTitle({ title }) {
  const location = useLocation();

  React.useEffect(() => {
    // Sayfa başlığını güncelle
    document.title = `${title} | Beeonhive`;

    // Favicon'u ayarla
    const faviconPath = "/beeonhivelogo1.png"; // Public klasöründeki favicon dosyanızın yolu
    const linkElement = document.querySelector("link[rel='icon']") || document.createElement("link");
    linkElement.rel = "icon";
    linkElement.href = faviconPath;
    document.head.appendChild(linkElement);
  }, [location, title]);

  return null;
}

export default PageTitle;
