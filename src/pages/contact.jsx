import React, { useState } from "react";
import { darkTheme } from "../Theme.jsx";
import { Button, Modal, Box, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    company: "",
    position: "",
    email: "",
    message: "",
  });
  const [charCount, setCharCount] = useState(255);

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    error: null,
    success: false,
  });

  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ loading: true, error: null, success: false });

    try {
      const apiUrl = `http://${window.location.hostname}:3000/api/contact`;
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Error al enviar el mensaje");
      }
      setSubmitStatus({ loading: false, error: null, success: true });
      setFormData({
        name: "",
        lastName: "",
        phone: "",
        company: "",
        position: "",
        email: "",
        message: "",
      });
      setModalMessage("¡Mensaje enviado con éxito!");
      setOpenModal(true);
    } catch (error) {
      setSubmitStatus({
        loading: false,
        error: error.message || "Error al enviar el mensaje",
        success: false,
      });
      setModalMessage("Error: " + error.message);
      setOpenModal(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message") {
      setCharCount(255 - value.length);
    }
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const inputStyle = {
    width: "100%",
    padding: "0.8rem",
    marginBottom: "1rem",
    backgroundColor: darkTheme.card,
    border: `1px solid ${darkTheme.background}`,
    borderRadius: "4px",
    color: darkTheme.primaryText,
    fontSize: "1rem",
    "@media screen and (maxWidth: 768px)": {
      padding: "0.6rem",
      fontSize: "0.95rem",
      marginBottom: "0.8rem",
    },
  };

  const buttonStyle = {
    padding: "1rem 2rem",
    width: "100%",
    backgroundColor: darkTheme.accent,
    color: "#FFFFFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    "@media screen and (maxWidth: 768px)": {
      padding: "0.8rem 1.5rem",
      fontSize: "0.95rem",
    },
  };

  return (
    <div
      style={{
        background: darkTheme.background,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        padding: "6rem 2rem 2rem 2rem",
        "@media screen and (maxWidth: 768px)": {
          padding: "5rem 1rem 1rem 1rem",
        },
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          width: "100%",
          padding: "3rem",
          backgroundColor: darkTheme.card,
          borderRadius: "8px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          "@media screen and (maxWidth: 768px)": {
            padding: "2rem",
          },
        }}
      >
        <h2
          style={{
            marginBottom: "2.5rem",
            fontSize: "2rem",
            textAlign: "center",
            background: "linear-gradient(135deg, #fff 0%, #2ed1b2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "transparent",
            "@media screen and (maxWidth: 768px)": {
              fontSize: "1.5rem",
              marginBottom: "2rem",
            },
          }}
        >
          Contáctanos
        </h2>

        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              display: "block",
              marginBottom: "1rem",
              "@media screen and (maxWidth: 768px)": {
                marginBottom: "0",
              },
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                flex: 1,
                "@media screen and (maxWidth: 768px)": {
                  width: "100%",
                  flex: "none",
                  marginBottom: "0.8rem",
                },
              }}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                flex: 1,
                "@media screen and (maxWidth: 768px)": {
                  width: "100%",
                  flex: "none",
                  marginBottom: "0.8rem",
                },
              }}
            />
          </div>
          <div
            style={{
              display: "block",
              marginBottom: "1rem",
              "@media screen and (maxWidth: 768px)": {
                marginBottom: "0",
              },
            }}
          >
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                flex: 1,
                "@media screen and (maxWidth: 768px)": {
                  width: "100%",
                  flex: "none",
                  marginBottom: "0.8rem",
                },
              }}
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                flex: 1,
                "@media screen and (maxWidth: 768px)": {
                  width: "100%",
                  flex: "none",
                  marginBottom: "0.8rem",
                },
              }}
            />
          </div>
          <div
            style={{
              display: "block",
              marginBottom: "1rem",
              "@media screen and (maxWidth: 768px)": {
                marginBottom: "0",
              },
            }}
          >
            <input
              type="text"
              name="company"
              placeholder="Empresa"
              value={formData.company}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                flex: 1,
                "@media screen and (maxWidth: 768px)": {
                  width: "100%",
                  flex: "none",
                  marginBottom: "0.8rem",
                },
              }}
            />
            <input
              type="text"
              name="position"
              placeholder="Cargo"
              value={formData.position}
              onChange={handleChange}
              required
              style={{
                ...inputStyle,
                flex: 1,
                "@media screen and (maxWidth: 768px)": {
                  width: "100%",
                  flex: "none",
                  marginBottom: "0.8rem",
                },
              }}
            />
          </div>
          <div style={{ position: "relative" }}>
            <textarea
              name="message"
              placeholder="Tu mensaje"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={255}
              style={{
                ...inputStyle,
                minHeight: "150px",
                resize: "vertical",
                marginBottom: "0.5rem",
                "@media screen and (maxWidth: 768px)": {
                  minHeight: "120px",
                },
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                right: "1rem",
                color: darkTheme.secondaryText,
                fontSize: "0.9rem",
              }}
            >
              {charCount}/255
            </div>
          </div>
        </div>

        <Button
          type="submit"
          variant="contained"
          endIcon={<SendIcon />}
          disabled={submitStatus.loading}
          sx={{
            width: "100%",
            padding: "1rem 2rem",
            backgroundColor: submitStatus.loading
              ? darkTheme.secondaryText
              : darkTheme.accent,
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: darkTheme.accent,
              opacity: 0.9,
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
            "@media screen and (maxWidth: 768px)": {
              padding: "0.8rem 1.5rem",
              fontSize: "0.95rem",
            },
          }}
        >
          {submitStatus.loading ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: darkTheme.card,
            color: darkTheme.primaryText,
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            minWidth: 300,
            textAlign: "center",
            "@media screen and (maxWidth: 768px)": {
              width: "90%",
              p: 3,
              minWidth: "auto",
            },
          }}
        >
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{
              "@media screen and (maxWidth: 768px)": {
                fontSize: "1.25rem",
              },
            }}
          >
            {submitStatus.success ? "¡Éxito!" : "Aviso"}
          </Typography>
          <Typography
            id="modal-description"
            sx={{
              mt: 2,
              "@media screen and (maxWidth: 768px)": {
                fontSize: "0.95rem",
              },
            }}
          >
            {modalMessage}
          </Typography>
          <Button
            sx={{
              mt: 2,
              backgroundColor: darkTheme.accent,
              color: "#fff",
              "&:hover": {
                backgroundColor: darkTheme.accent,
                opacity: 0.9,
              },
              "@media screen and (maxWidth: 768px)": {
                mt: 1.5,
                fontSize: "0.95rem",
              },
            }}
            onClick={() => setOpenModal(false)}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactForm;
