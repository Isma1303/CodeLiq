import React from "react";
import { lightTheme, darkTheme } from "../Theme.jsx";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
      <div className="container">
        <div
          className="footer-content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 1rem",
            color: darkTheme.primaryText,
            "@media screen and (minWidth: 768px)": {
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "0",
            },
          }}
        >
          <p
            style={{
              margin: 0,
              textAlign: "center",
              fontSize: "0.9rem",
              "@media screen and (minWidth: 768px)": {
                textAlign: "left",
                fontSize: "1rem",
              },
            }}
          >
            &copy; 2025 CodeLiq. Todos los derechos reservados.
          </p>
          <ul
            className="social-links"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              listStyleType: "none",
              gap: "15px",
              margin: 0,
              padding: 0,
              "@media screen and (maxWidth: 480px)": {
                gap: "10px",
                fontSize: "0.9rem",
              },
            }}
          >
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
                color: "#FFFFFF",
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
                url: "https://wa.me/tunumero",
              },
            ].map(({ Icon, name, color, url }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    padding: "5px",
                    fontSize: "0.9rem",
                    "@media screen and (maxWidth: 360px)": {
                      "& span": {
                        display: "none",
                      },
                    },
                    "@media screen and (minWidth: 768px)": {
                      fontSize: "1rem",
                    },
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = color;
                    e.currentTarget.querySelector("svg").style.color = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#FFFFFF";
                    e.currentTarget.querySelector("svg").style.color =
                      "#FFFFFF";
                  }}
                >
                  <Icon
                    style={{
                      color: "#FFFFFF",
                      transition: "color 0.3s ease",
                      fontSize: "1.2rem",
                      "@media screen and (maxWidth: 480px)": {
                        fontSize: "1rem",
                      },
                    }}
                  />
                  <span>{name}</span>
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
