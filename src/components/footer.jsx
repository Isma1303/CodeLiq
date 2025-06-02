import React from "react";
import { darkTheme } from "../Theme.jsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: darkTheme.backgroundSecondary,
        color: darkTheme.primaryText,
        padding: "2rem 0",
        width: "100%",
        marginTop: "auto",
      }}
    >
      <style>
        {`
          .footer-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
          }
          @media (min-width: 768px) {
            .footer-content {
              flex-direction: row;
              justify-content: space-between;
              align-items: flex-start;
              gap: 0;
            }
            .footer-left {
              text-align: left;
              font-size: 1rem;
            }
            .footer-right {
              justify-content: flex-end;
            }
          }
          .footer-left {
            margin: 0;
            text-align: center;
            font-size: 0.9rem;
          }
          .social-links {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            list-style-type: none;
            gap: 15px;
            margin: 0;
            padding: 0;
          }
          @media (max-width: 480px) {
            .social-links {
              gap: 10px;
              font-size: 0.9rem;
            }
          }
          .social-link {
            color: #FFFFFF;
            display: flex;
            align-items: center;
            gap: 5px;
            text-decoration: none;
            transition: all 0.3s ease;
            padding: 5px;
            font-size: 0.9rem;
          }
          .social-link:hover, .social-link:focus {
            text-decoration: underline;
          }
          @media (max-width: 360px) {
            .social-link span {
              display: none;
            }
          }
          @media (min-width: 768px) {
            .social-link {
              font-size: 1rem;
            }
          }
          .email-gradient-hover {
            background: linear-gradient(90deg, #ffe600, #0099ff, #25d366);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            transition: background 0.3s ease;
          }
        `}
      </style>
      <div className="container">
        <div className="footer-content">
          <p className="footer-left">
            &copy; 2025 CodeLiq. Todos los derechos reservados.
          </p>
          <ul className="social-links footer-right">
            {[
              {
                Icon: FacebookIcon,
                name: "Facebook",
                color: "#1877F2",
                url: "https://facebook.com",
              },
              {
                Icon: XIcon,
                name: "Twitter",
                color: "#000000",
                url: "https://twitter.com",
              },
              {
                Icon: LinkedInIcon,
                name: "LinkedIn",
                color: "#0A66C2",
                url: "https://linkedin.com",
              },
              {
                Icon: WhatsAppIcon,
                name: "WhatsApp",
                color: "#25D366",
                url: "https://wa.me/46800417",
              },
              {
                Icon: EmailIcon,
                name: "Email",
                color: "#FFFFFF",
                url: "mailto:codeliqguaatemal@gmail.com",
              },
            ].map(({ Icon, name, color, url }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ color: "#FFFFFF" }}
                  onMouseEnter={(e) => {
                    if (name === "Email") {
                      const wrap = e.currentTarget.querySelector(".email-gradient-wrap");
                      wrap.classList.add("email-gradient-hover");
                      // Para el icono SVG, forzamos fill a transparent para que tome el gradiente
                      const svg = wrap.querySelector("svg");
                      svg.style.color = "inherit";
                    } else {
                      e.currentTarget.style.color = color;
                      e.currentTarget.querySelector("svg").style.color = color;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (name === "Email") {
                      const wrap = e.currentTarget.querySelector(".email-gradient-wrap");
                      wrap.classList.remove("email-gradient-hover");
                      const svg = wrap.querySelector("svg");
                      svg.style.color = "#FFFFFF";
                    } else {
                      e.currentTarget.style.color = "#FFFFFF";
                      e.currentTarget.querySelector("svg").style.color =
                        "#FFFFFF";
                    }
                  }}
                >
                  {name === "Email" ? (
                    <span className="email-gradient-wrap" style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                      <Icon
                        style={{
                          color: "#FFFFFF",
                          transition: "color 0.3s ease",
                          fontSize: "1.2rem",
                        }}
                      />
                      <span>{name}</span>
                    </span>
                  ) : (
                    <>
                      <Icon
                        style={{
                          color: "#FFFFFF",
                          transition: "color 0.3s ease",
                          fontSize: "1.2rem",
                        }}
                      />
                      <span>{name}</span>
                    </>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
