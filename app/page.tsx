import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Work from "../components/Work";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Resume />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}