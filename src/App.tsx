import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Solutions } from "./components/Solutions";
import { WhyRealMagic } from "./components/WhyRealMagic";
import { Testimonials } from "./components/Testimonials";
import { Ecosystem } from "./components/Ecosystem";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Products />
        <Solutions />
        <WhyRealMagic />
        <Testimonials />
        <Ecosystem />
      </main>
      <Footer />
    </div>
  );
}