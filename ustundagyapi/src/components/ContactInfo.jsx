import Line from "./Line";
import "../styles/contact.css";

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <Line />

      <div className="address">
        <h3>Adres</h3>
        <div>
          <span>
            Zuhuratbaba Mahallesi, İncirli Caddesi, Meydan Plaza, No: 17/17
          </span>
          <span>Bakırköy, İstanbul</span>
        </div>
      </div>

      <Line />

      <div className="email">
        <h3>E-Posta Adresi</h3>
        <div>info@ustundagyapi.com.tr</div>
      </div>

      <Line />

      <div className="phone">
        <h3>Telefon Numarası</h3>
        <div>
          <div>
            <span>Necmi Rıza Üstündağ</span>
            <span>Bilgisayar Mühendisi</span>
            <span>+90 532 445 97 37</span>
          </div>

          <div>
            <span>Cihan Üstündağ</span>
            <span>İnşaat Mühendisi</span>
            <span>+90 532 441 25 34</span>
          </div>
        </div>
      </div>
    </div>
  );
}
