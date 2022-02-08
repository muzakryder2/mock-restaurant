import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import GiftCard from "./components/GiftCard/GiftCard";
import Hours from "./components/Hours/Hours";
import MainContent from "./components/MainContent/MainContent";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <GiftCard />
      <Hours />
      <MainContent />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
