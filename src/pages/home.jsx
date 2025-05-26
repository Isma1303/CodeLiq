import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { lightTheme, darkTheme } from "../Theme.jsx";
import logo from "../assets/logo.png";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: darkTheme.background,
        color: darkTheme.primaryText,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "6rem 2rem",
        textAlign: "center",
        minHeight: "100vh",
        "@media (maxWidth: 768px)": {
          padding: "5rem 1rem 2rem 1rem",
          minHeight: "100vh",
        },
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "0 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          "@media (maxWidth: 768px)": {
            padding: "0 0.5rem",
            gap: "1.5rem",
          },
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
            animation: "fadeInDown 1s ease-out",
            "@media (maxWidth: 768px)": {
              marginBottom: "0.5rem",
            },
          }}
        >
          <img
            src={logo}
            alt="CodeLiq Logo"
            style={{
              width: "auto",
              height: "150px",
              filter: "drop-shadow(0 0 10px rgba(46, 209, 178, 0.3))",
              "@media (maxWidth: 768px)": {
                height: "100px",
              },
            }}
          />
        </div>

        <h1
          style={{
            fontSize: "3.5rem",
            marginBottom: "1rem",
            fontWeight: "bold",
            background: "linear-gradient(135deg, #fff 0%, #2ed1b2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "fadeInUp 1s ease-out",
            "@media (maxWidth: 768px)": {
              fontSize: "2rem",
              marginBottom: "0.5rem",
              lineHeight: "1.2",
            },
          }}
        >
          Bienvenido a CodeLiq
        </h1>

        <p
          style={{
            fontSize: "1.5rem",
            maxWidth: "800px",
            margin: "0 auto 2rem",
            color: darkTheme.secondaryText,
            lineHeight: "1.6",
            animation: "fadeIn 1.5s ease-out",
            "@media (maxWidth: 768px)": {
              fontSize: "1rem",
              margin: "0 auto 1rem",
              lineHeight: "1.5",
            },
          }}
        >
          Desarrollo de software innovador para impulsar tu negocio al siguiente
          nivel
        </p>

        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            width: "100%",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "0 1rem",
            animation: "fadeInUp 1.5s ease-out",
            "@media (maxWidth: 768px)": {
              flexDirection: "column",
              gap: "0.75rem",
              padding: "0 0.5rem",
            },
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/services")}
            sx={{
              padding: "0.875rem 1.5rem",
              fontSize: "1rem",
              backgroundColor: darkTheme.accent,
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: darkTheme.accent,
                opacity: 0.9,
                transform: "translateY(-2px)",
              },
              "@media (max-width: 768px)": {
                padding: "0.625rem 1rem",
                fontSize: "0.875rem",
                width: "100%",
              },
            }}
          >
            Nuestros Servicios
          </Button>
          <Button
            variant="outlined"
            onClick={() => navigate("/contact")}
            sx={{
              padding: "0.875rem 1.5rem",
              fontSize: "1rem",
              color: darkTheme.accent,
              borderColor: darkTheme.accent,
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: darkTheme.accent,
                backgroundColor: "rgba(46, 209, 178, 0.1)",
                transform: "translateY(-2px)",
              },
              "@media (max-width: 768px)": {
                padding: "0.625rem 1rem",
                fontSize: "0.875rem",
                width: "100%",
              },
            }}
          >
            Contáctanos
          </Button>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default HomePage;
