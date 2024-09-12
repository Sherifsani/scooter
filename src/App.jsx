import Navbar from "./components/Navbar";
import "./App.css";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductInfo from "./components/ProductInfo";
import MotorSection from "./components/MotorSection";

function App() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Features />
      <ProductInfo />
      <MotorSection />
    </main>
  );
}

export default App;
