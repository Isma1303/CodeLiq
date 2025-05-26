import { darkTheme } from "../Theme.jsx";

const About = () => {
  return (
    <div style={{
      background: darkTheme.background,
      minHeight: "100vh",
      padding: "2rem",
      color: darkTheme.primaryText,
      "@media (maxWidth: 768px)": {
        padding: "1rem"
      }
    }}>
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "1rem",
        "@media (maxWidth: 768px)": {
          padding: "0.5rem"
        }
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          textAlign: "center",
          color: darkTheme.primaryText,
          "@media (maxWidth: 768px)": {
            fontSize: "2rem",
            marginBottom: "1.5rem"
          }
        }}>🧩 Sobre Nosotros</h1>

        <div style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "1fr",
          "@media (minWidth: 768px)": {
            gridTemplateColumns: "repeat(2, 1fr)"
          },
          "@media (maxWidth: 768px)": {
            gap: "1.5rem"
          }
        }}>
          <section>
            <p style={{
              marginBottom: "1.5rem",
              lineHeight: "1.6",
              "@media (maxWidth: 768px)": {
                marginBottom: "1rem",
                fontSize: "0.95rem"
              }
            }}>
              Somos una empresa joven y apasionada por la tecnología, dedicada al desarrollo de software a la medida, aplicaciones SaaS, de escritorio y móviles. Nacimos con el propósito de ayudar a los negocios a crecer mediante soluciones digitales accesibles, eficientes y adaptadas a sus necesidades reales.
            </p>
            <p style={{
              marginBottom: "1.5rem",
              lineHeight: "1.6",
              "@media (maxWidth: 768px)": {
                marginBottom: "1rem",
                fontSize: "0.95rem"
              }
            }}>
              Creemos firmemente que la tecnología debe estar al alcance de todos, por eso nos enfocamos en brindar herramientas fáciles de implementar y de alto impacto.
            </p>
            <p style={{
              marginBottom: "2rem",
              lineHeight: "1.6",
              "@media (maxWidth: 768px)": {
                marginBottom: "1.5rem",
                fontSize: "0.95rem"
              }
            }}>
              Nuestro compromiso va más allá del desarrollo: buscamos construir relaciones de confianza con nuestros clientes, impulsar la innovación y contribuir activamente al crecimiento de cada proyecto que confié en nosotros.
            </p>
          </section>

          <section>
            <div style={{
              background: darkTheme.card,
              padding: "2rem",
              borderRadius: "8px",
              marginBottom: "2rem",
              transition: "all 0.3s ease",
              "@media (maxWidth: 768px)": {
                padding: "1.5rem",
                marginBottom: "1.5rem"
              },
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
              }
            }}>
              <h2 style={{
                fontSize: "1.8rem",
                marginBottom: "1rem",
                color: darkTheme.primaryText,
                "@media (maxWidth: 768px)": {
                  fontSize: "1.5rem",
                  marginBottom: "0.8rem"
                }
              }}>🎯 Misión</h2>
              <p style={{
                lineHeight: "1.6",
                "@media (maxWidth: 768px)": {
                  fontSize: "0.95rem"
                }
              }}>
                Desarrollar soluciones tecnológicas personalizadas que respondan a los retos reales de las empresas, ofreciendo productos accesibles, innovadores y fáciles de usar, para potenciar el crecimiento de nuestros clientes.
              </p>
            </div>

            <div style={{
              background: darkTheme.card,
              padding: "2rem",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              "@media (maxWidth: 768px)": {
                padding: "1.5rem"
              },
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)"
              }
            }}>
              <h2 style={{
                fontSize: "1.8rem",
                marginBottom: "1rem",
                color: darkTheme.primaryText,
                "@media (maxWidth: 768px)": {
                  fontSize: "1.5rem",
                  marginBottom: "0.8rem"
                }
              }}>🌟 Visión</h2>
              <p style={{
                lineHeight: "1.6",
                "@media (maxWidth: 768px)": {
                  fontSize: "0.95rem"
                }
              }}>
                Convertirnos en una empresa sólida y referente en el sector tecnológico, reconocida por su calidad, compromiso y cercanía con cada cliente. Aspiramos a crecer junto a nuestros colaboradores y contribuir al desarrollo digital de los negocios en toda la región.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default About;
