import React from "react";
import { darkTheme } from "../Theme.jsx";

const ServicesPage = () => {
  const ServiceCard = ({ title, description, link }) => (
    <div
      style={{
        backgroundColor: darkTheme.card,
        borderRadius: "8px",
        padding: "2rem",
        margin: "1rem",
        flex: "1 1 300px",
        maxWidth: "400px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        "@media (maxWidth: 768px)": {
          flex: "1 1 100%",
          maxWidth: "100%",
          margin: "0.5rem",
          padding: "1.5rem"
        },
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
        }
      }}
      onClick={() => link && (window.location.href = link)}
    >
      <h3
        style={{
          color: darkTheme.primaryText,
          marginBottom: "1rem",
          fontSize: "1.5rem",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: darkTheme.secondaryText,
          lineHeight: "1.6",
          marginBottom: link ? "1rem" : "0"
        }}
      >
        {description}
      </p>
      {link && (
        <button
          style={{
            backgroundColor: darkTheme.accent,
            color: darkTheme.primaryText,
            border: "none",
            borderRadius: "4px",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: `${darkTheme.accent}dd`
            }
          }}
          onClick={(e) => {
            e.stopPropagation();
            window.location.href = link;
          }}
        >
          Más información
        </button>
      )}
    </div>
  );

  const services = [
    {
      title: "Software a la Medida",
      description:
        "Desarrollamos soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio."
    },
    {
      title: "SaaS",
      description:
        "Nuestras soluciones de Software como Servicio te permiten escalar tu negocio sin preocupaciones.",
      link: "/saas-solutions"
    },
    {
      title: "Aplicaciones de Escritorio",
      description:
        "Creamos aplicaciones robustas y eficientes para Windows, macOS y Linux."
    },
    {
      title: "Aplicaciones Móviles",
      description:
        "Desarrollamos apps nativas y multiplataforma para iOS y Android."
    }
  ];

  return (
    <div
      style={{
        background: darkTheme.background,
        minHeight: "100%",
        padding: "4rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: darkTheme.primaryText,
            textAlign: "center",
            marginBottom: "3rem",
            fontSize: "2.5rem",
          }}
        >
          Nuestros Servicios
        </h1>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
