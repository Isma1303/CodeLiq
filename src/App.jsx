import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import ContactForm from "./pages/contact";
import About from "./pages/about";
import SaaSSolutions from "./pages/saas-solutions";
import PricePage from "./pages/price";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/saas-solutions" element={<SaaSSolutions />} />
          <Route path="/price" element={<PricePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
