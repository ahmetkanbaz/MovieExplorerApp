import FooterBottom from "./FooterBottom/FooterBottom";
import FooterCommunication from "./FooterCommunication/FooterCommunication";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterSocial from "./FooterSocial/FooterSocial";

const Footer = () => {
  return (
    <footer className="pt-5 bg-body-tertiary">
      <div className="container">
        <div className="row">
          <FooterInfo />
          <FooterSocial />
          <FooterCommunication />
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
