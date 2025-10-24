export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">logo</div>
          <div>
            Üstündağ Yapı, temelleri 1970’li yıllarda atılmış, bugün 3. kuşak
            tarafından yönetilen köklü bir inşaat şirketidir. Kuruluşumuzdan bu
            yana dürüstlük, kalite ve güven ilkelerinden ödün vermeden,
            İstanbul’un farklı noktalarında nitelikli projelere imza atıyoruz.
          </div>
        </div>

        <div className="footer-right">
          <h3>Hızlı Menü</h3>
          <nav className="footer-nav">
            <a href="#home">Ana Sayfa</a>
            <a href="#projects">Projeler</a>
            <a href="#about">Hakkımızda</a>
            <a href="#contact">İletişim</a>
          </nav>
        </div>
      </div>

      <div className="footer-note">© 2025 – Üstündağ Yapı İnşaat A.Ş.</div>
    </div>
  );
}
