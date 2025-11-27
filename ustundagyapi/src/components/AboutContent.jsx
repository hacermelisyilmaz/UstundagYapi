import { useEffect, useRef } from "react";
import img12 from "../assets/12.jpg";
import "../styles/about.css";

export default function AboutContent() {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const el = paragraphRef.current;
    const text = el.innerText;
    const lines = text.split("\n");

    el.innerHTML = "";

    lines.forEach((line, i) => {
      const span = document.createElement("span");
      span.classList.add("line");
      span.style.animationDelay = `${i * 0.15}s`;
      span.innerText = line;
      el.appendChild(span);
    });
  }, []);

  return (
    <div className="about-wrapper">
      <div className="about-image">
        <img src={img12} alt="Üstündağ Yapı" />
      </div>

      <p ref={paragraphRef} className="about-paragraph">
        Üstündağ Yapı, temelleri 1970’li yıllarda atılmış, bugün 3. kuşak
        tarafından yönetilen köklü bir inşaat şirketidir. Kuruluşumuzdan bu yana
        dürüstlük, kalite ve güven ilkelerinden ödün vermeden, İstanbul’un
        farklı noktalarında nitelikli projelere imza atıyoruz.
      </p>
    </div>
  );
}
