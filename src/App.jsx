import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';  // Import HelmetProvider
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Training from "./pages/Training";

const App = () => {
  return (
    <HelmetProvider> {/* Wrap the entire app with HelmetProvider */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
        </Routes>
      </main>
      <Footer />
    </HelmetProvider>
  );
};

export default App;
