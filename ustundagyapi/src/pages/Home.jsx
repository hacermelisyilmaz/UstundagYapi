import HeaderContent from "../components/HeaderContent";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <Header />
        <HeaderContent />
      </div>
      <Footer />
    </div>
  );
}
