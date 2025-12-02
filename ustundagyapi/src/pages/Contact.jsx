import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "../styles/contact.css";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  return (
    <div className="contact">
      <Header />

      <div className="contact-wrapper">
        <div className="contact-title">
          <ContactInfo />
        </div>

        <ContactForm />
      </div>

      <Footer />
    </div>
  );
}
