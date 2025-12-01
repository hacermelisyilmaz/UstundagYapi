import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Line from "../components/Line";
import "../styles/contact.css";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  return (
    <div className="contact">
      <Header />

      <div className="contact-wrapper">
        <div className="contact-title">
          <Line />
          <h2>Birlikte Daha Sağlam Yarınlara</h2>
          <div>
            Her adımda kalite, her projede güven. Sorularınız ve proje
            talepleriniz için uzman ekibimizle hemen iletişime geçin.
          </div>

          <ContactInfo />
        </div>

        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
