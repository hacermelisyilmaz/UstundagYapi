import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/privacy.css";

export default function Privacy() {
  return (
    <div className="privacy">
      <Header />

      <div className="privacy-content">
        <h2>Kişisel Verilerin Korunması Politikası</h2>
        <p>
          Üstündağ Yapı olarak, kişisel verilerinize ilişkin mahremiyet ve
          güvenlik ilkelerine en yüksek düzeyde önem veriyoruz. Bu kapsamda,
          tarafınızdan toplanan bilgilerin hangi yöntemlerle ve hangi amaçlarla
          işlendiğini açıklamak amacıyla işbu Gizlilik Politikası
          hazırlanmıştır.
        </p>
        <p>
          <span>Web sitemizin adresi:</span>www.ustundagyapi.com.tr
        </p>
        <p>
          Bu Gizlilik Politikası yalnızca www.ustundagyapi.com.tr internet
          sitesi için geçerlidir. Politikayı kabul etmemeniz hâlinde internet
          sitemizi kullanmayı durdurmanız gerekmektedir.
        </p>
        <p>
          <span>Hangi kişisel bilgileri hangi amaçlarla topluyoruz?</span>
          Projelerimiz hakkında bilgilendirme yapabilmek ve tarafınızla sağlıklı
          iletişim kurabilmek amacıyla ad, soyad, e-posta adresi ve telefon
          numarası gibi kişisel verilerinizi talep etmekteyiz.
        </p>
        <p>
          <span>Toplanan verileri nasıl kullanıyoruz?</span>
          İletişim verileriniz, yalnızca tarafınızca talep edilen konular
          kapsamında sizinle irtibat kurulması amacıyla kullanılmaktadır.
        </p>
        <p>
          <span>Kişisel verilerin kimlerle paylaşıldığı</span>
          Tarafımızca işlenen kişisel veriler, ancak yasal yükümlülüklerimizin
          yerine getirilmesi amacıyla ilgili resmi kurum ve mercilerden gelen
          bağlayıcı talepler doğrultusunda üçüncü kişilerle paylaşılabilir.
          Bunun dışında herhangi bir paylaşım yapılmamaktadır.
        </p>
        <p>
          <span>Gizlilik Politikasındaki değişiklikler</span>İşbu Gizlilik
          Politikası, gerektiğinde güncellenebilir. Yapılacak esaslı
          değişiklikler bu sayfa üzerinden ilan edilecektir.
        </p>
        <p>
          <span>İletişim</span>Gizlilik Politikası’na ilişkin tüm soru, talep ve
          görüşlerinizi <a href="/iletisim">iletişim</a> sayfasını kullanarak
          bize iletebilirsiniz:
        </p>
      </div>

      <Footer />
    </div>
  );
}
