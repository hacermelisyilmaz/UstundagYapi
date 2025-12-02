import { useEffect, useRef } from "react";
import Line from "./Line";
import "../styles/contact.css";

const contactItems = [
  {
    type: "text",
    title: "Birlikte Daha Sağlam Yarınlara",
    content:
      "Her adımda kalite, her projede güven. Sorularınız ve proje talepleriniz için uzman ekibimizle hemen iletişime geçin.",
  },
  {
    type: "address",
    title: "Adres",
    lines: [
      "Zuhuratbaba Mahallesi, İncirli Caddesi, Meydan Plaza, No: 17/17",
      "Bakırköy, İstanbul",
    ],
  },
  {
    type: "email",
    title: "E-Posta Adresi",
    content: "info@ustundagyapi.com.tr",
  },
  {
    type: "phone",
    title: "Telefon Numarası",
    phones: [
      ["Necmi Rıza Üstündağ", "Bilgisayar Mühendisi", "+90 532 445 97 37"],
      ["Cihan Üstündağ", "İnşaat Mühendisi", "+90 532 441 25 34"],
    ],
  },
];

export default function ContactInfo() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemsRef.current.forEach((item) => item && observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-info">
      {contactItems.map((item, index) => (
        <div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className="contact-item"
        >
          <Line />
          {item.type === "text" && (
            <>
              <h2>{item.title}</h2>
              <div>{item.content}</div>
            </>
          )}
          {item.type === "address" && (
            <div className="address">
              <h3>{item.title}</h3>
              {item.lines.map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
          )}
          {item.type === "email" && (
            <div className="email">
              <h3>{item.title}</h3>
              <div>{item.content}</div>
            </div>
          )}
          {item.type === "phone" && (
            <div className="phone">
              <h3>{item.title}</h3>
              <div>
                {item.phones.map((p, i) => (
                  <div key={i}>
                    {p.map((line, j) => (
                      <span key={j}>{line}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
