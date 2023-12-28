/* eslint-disable react/no-unescaped-entities */
import footerLogo from "../../../assets/footerLogo.png";
const FooterInfo = () => {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <img
        src={footerLogo}
        alt="Movie Explorer Footer Logo"
        className="img-fluid"
      />
      <p className="mb-0">
        En yeni filmleri keşfetmek, favori filmleri aramak ve detaylı bilgilere
        ulaşmak için MovieExplorerApp'i kullanarak sinema dünyasına keyifli bir
        yolculuğa çıkın.
      </p>
    </div>
  );
};

export default FooterInfo;
