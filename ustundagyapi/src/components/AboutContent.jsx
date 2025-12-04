import { useEffect, useRef } from "react";
import img12 from "../assets/img12.jpg";
import "../styles/about.css";
import Line from "./Line";

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
      span.style.animationDelay = `${i * 0.5}s`;
      span.innerText = line;
      el.appendChild(span);
    });
  }, []);

  return (
    <div className="about-wrapper">
      <div className="about-title">
        <Line />
        <h2>Biz</h2>
        <h2>Kimiz?</h2>
      </div>

      <div ref={paragraphRef} className="about-paragraph">
        <span>
          Üstündağ Yapı, temelleri 1970’li yıllarda atılmış, bugün 3. kuşak
          tarafından yönetilen köklü bir inşaat şirketidir. Kuruluşumuzdan bu
          yana dürüstlük, kalite ve güven ilkelerinden ödün vermeden,
          İstanbul’un farklı noktalarında nitelikli projelere imza atıyoruz.
        </span>
        <span>
          Geçmişte ağırlıklı olarak işyeri ve ticari yapı inşaatlarıyla faaliyet
          gösteren firmamız, zamanla uzmanlığını konut projelerine
          yönlendirerek, bugünün ihtiyaçlarına uygun modern ve yaşanabilir
          alanlar üretmeye odaklanmıştır.
        </span>
        <span>
          Bugün, Üstündağ Yapı ismi; sağlamlık, estetik ve müşteri
          memnuniyetiyle özdeşleşmiştir. Üç kuşaktır biriken deneyimimizi, çağın
          gereksinimlerine uygun mühendislik çözümleriyle birleştiriyor;
          İstanbul’da güvenli, konforlu ve uzun ömürlü konutlar inşa ediyoruz.
          Her projede, sadece yapılar değil, insanların hayatlarını sürdüreceği
          mutlu yaşam alanları tasarlıyoruz.
        </span>
        <span>
          Üstündağ Yapı olarak amacımız; inşa ettiğimiz her yapıda, bize duyulan
          güveni gelecek nesillere taşıyacak kalıcı izler bırakmaktır.
        </span>
      </div>

      <div className="about-image">
        <img src={img12} alt="Üstündağ Yapı" />
      </div>
    </div>
  );
}
