import React from "react";
import { darkTheme } from "../Theme.jsx";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import HandshakeIcon from "@mui/icons-material/Handshake";

const PricePage = () => {
  const navigate = useNavigate();

  const plans = [
    {
      title: "Plan Básico",
      price: "Desde $80",
      features: [
        "1 Servicio SaaS a elegir",
        "Soporte básico",
        "Actualizaciones",
        "Base de datos compartida",
      ],
      icon: <LocalAtmIcon sx={{ fontSize: 40, color: darkTheme.accent }} />,
    },
    {
      title: "Plan Profesional",
      price: "Desde $150",
      features: [
        "Modulo Saas profesional",
        "Soporte prioritario",
        "Actualizacios continuas",
        "5 usuarios administradores",
        "Personalización básica",
        "Base de datos basica",
      ],
      icon: <RequestQuoteIcon sx={{ fontSize: 40, color: darkTheme.accent }} />,
    },
    {
      title: "Plan Empresarial",
      price: "Personalizado",
      features: [
        "Módulo SaaS empresarial",
        "Soporte dedicado",
        "Actualizaciones ilimitadas",
        "Usuarios ilimitados",
        "Personalización completa",
        "API dedicada",
        "Base de datos dedicada",
      ],
      icon: <HandshakeIcon sx={{ fontSize: 40, color: darkTheme.accent }} />,
    },
  ];

  return (
    <div
      style={{
        background: darkTheme.background,
        minHeight: "100vh",
        padding: "6rem 2rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "@media screen and (maxWidth: 768px)": {
          padding: "5rem 1rem 1rem",
        },
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: darkTheme.primaryText,
            textAlign: "center",
            marginBottom: "1rem",
            fontSize: "2.5rem",
            background: "linear-gradient(135deg, #fff 0%, #2ed1b2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            "@media screen and (maxWidth: 768px)": {
              fontSize: "2rem",
            },
          }}
        >
          Planes y Precios
        </h1>

        <p
          style={{
            color: darkTheme.secondaryText,
            maxWidth: "700px",
            textAlign: "center",
            margin: "0 auto 3rem",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            "@media screen and (maxWidth: 768px)": {
              fontSize: "1rem",
              margin: "0 auto 2rem",
            },
          }}
        >
          Elige el plan que mejor se adapte a tus necesidades. Todos nuestros
          planes incluyen soporte técnico y actualizaciones continuas.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            margin: "0 auto",
            "@media screen and (maxWidth: 768px)": {
              gap: "1.5rem",
            },
          }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                backgroundColor: darkTheme.card,
                borderRadius: "10px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              {plan.icon}
              <h3
                style={{
                  color: darkTheme.primaryText,
                  margin: "1rem 0",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              >
                {plan.title}
              </h3>
              <p
                style={{
                  color: darkTheme.accent,
                  fontSize: "1.8rem",
                  fontWeight: "bold",
                  margin: "1rem 0",
                  textAlign: "center",
                }}
              >
                {plan.price}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "1rem 0",
                  color: darkTheme.secondaryText,
                  textAlign: "center",
                }}
              >
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    style={{
                      margin: "0.5rem 0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        color: darkTheme.accent,
                        fontSize: "1.2rem",
                      }}
                    >
                      •
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="contained"
                onClick={() => navigate("/contact")}
                sx={{
                  marginTop: "auto",
                  backgroundColor: darkTheme.accent,
                  color: "#fff",
                  padding: "0.8rem 2rem",
                  "&:hover": {
                    backgroundColor: darkTheme.accent,
                    opacity: 0.9,
                    transform: "translateY(-2px)",
                  },
                }}
              >
                Solicitar cotización
              </Button>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "4rem",
            textAlign: "center",
            color: darkTheme.secondaryText,
            "@media screen and (maxWidth: 768px)": {
              marginTop: "3rem",
            },
          }}
        >
          <p>
            ¿Necesitas una solución personalizada?{" "}
            <span
              style={{
                color: darkTheme.accent,
                cursor: "pointer",
              }}
              onClick={() => navigate("/contact")}
            >
              Contáctanos
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricePage;
