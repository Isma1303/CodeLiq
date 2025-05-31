import React from "react";
import { darkTheme } from "../Theme.jsx";

const SaaSSolutionsPage = () => {
  const solutions = [
    {
      title: "Agenda y Recordatorios",
      description:
        "Sistema integral para la gestión de citas, eventos y recordatorios automáticos. Optimiza tu tiempo y nunca pierdas una cita importante.",
      features: [
        "Calendario interactivo",
        "Notificaciones automáticas",
        "Sincronización multiplataforma",
      ],
      image: "https://img.icons8.com/color/96/000000/calendar.png",
    },
    {
      title: "Control de Turnos y Asistencia",
      description:
        "Gestiona eficientemente los horarios de tu personal y el control de asistencia con nuestra solución automatizada.",
      features: [
        "Registro biométrico",
        "Reportes en tiempo real",
        "Gestión de turnos flexible",
      ],
      image: "https://img.icons8.com/color/96/000000/overtime.png",
    },
    {
      title: "CRM Clientes Frecuentes",
      description:
        "Mantén una relación cercana con tus clientes más valiosos. Gestiona perfiles, preferencias y programas de fidelización.",
      features: [
        "Perfiles detallados",
        "Historial de interacciones",
        "Programa de puntos",
      ],
      image: "https://img.icons8.com/color/96/000000/customer-insight.png",
    },
    {
      title: "Sistema de Encuestas y Feedback",
      description:
        "Conoce la opinión de tus clientes y mejora tu servicio con nuestro sistema de encuestas y análisis de feedback.",
      features: [
        "Encuestas personalizables",
        "Análisis en tiempo real",
        "Reportes detallados",
      ],
      image: "https://img.icons8.com/color/96/000000/survey.png",
    },
    {
      title: "Gestión de Ventas de Negocios",
      description:
        "Potencia tus ventas con nuestra solución integral que te permite controlar todo el ciclo de ventas desde un solo lugar.",
      features: [
        "Dashboard de ventas",
        "Seguimiento de metas",
        "Reportes avanzados",
      ],
      image: "https://img.icons8.com/color/96/000000/sales-performance.png",
    },
    {
      title: "CRM Empresarial",
      description:
        "Sistema de gestión de relaciones con clientes totalmente personalizable.",
      features: [
        "Gestión de contactos",
        "Seguimiento de ventas",
        "Automatización de marketing",
      ],
      image: "https://img.icons8.com/fluency/96/business-network.png",
    },
    {
      title: "Sistema de Gestión de Inventario",
      description: "Control total sobre tu inventario en tiempo real.",
      features: [
        "Control de stock",
        "Alertas automáticas",
        "Reportes detallados",
      ],
      image: "https://img.icons8.com/fluency/96/warehouse.png",
    },
    {
      title: "Plataforma de E-learning",
      description:
        "Sistema completo para gestión de cursos y estudiantes online.",
      features: ["Aulas virtuales", "Sistema de evaluación", "Certificaciones"],
      image: "https://img.icons8.com/color/96/000000/e-learning.png",
    },
    {
      title: "Sistema de Facturación",
      description: "Gestiona tus facturas y pagos de forma eficiente.",
      features: [
        "Facturación electrónica",
        "Control de pagos",
        "Reportes financieros",
      ],
      image: "https://img.icons8.com/color/96/000000/invoice.png",
    },
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
            paddingTop: "4.1rem",
            color: darkTheme.primaryText,
            textAlign: "center",
            marginBottom: "3rem",
            fontSize: "2.5rem",
          }}
        >
          Soluciones SaaS
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            padding: "1rem",
            margin: "0 auto",
            maxWidth: "1400px",
            "@media (maxWidth: 768px)": {
              gridTemplateColumns: "1fr",
              gap: "1.5rem",
              padding: "0.5rem",
            },
          }}
        >
          {solutions.map((solution, index) => (
            <div
              key={index}
              style={{
                backgroundColor: darkTheme.card,
                borderRadius: "8px",
                padding: "2rem",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5rem",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <img
                src={solution.image}
                alt={solution.title}
                style={{
                  width: "64px",
                  height: "64px",
                  marginBottom: "1rem",
                }}
              />
              <h3
                style={{
                  color: darkTheme.primaryText,
                  marginBottom: "1rem",
                  fontSize: "1.5rem",
                }}
              >
                {solution.title}
              </h3>
              <p
                style={{
                  color: darkTheme.secondaryText,
                  marginBottom: "1.5rem",
                  lineHeight: "1.6",
                }}
              >
                {solution.description}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                }}
              >
                {solution.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    style={{
                      color: darkTheme.primaryText,
                      marginBottom: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      "&:before": {
                        content: '"•"',
                        color: darkTheme.accent,
                        marginRight: "0.5rem",
                      },
                    }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaaSSolutionsPage;
