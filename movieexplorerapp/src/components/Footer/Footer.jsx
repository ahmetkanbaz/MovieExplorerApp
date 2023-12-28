import FooterCommunication from "./FooterCommunication/FooterCommunication";
import FooterInfo from "./FooterInfo/FooterInfo";
import FooterSocial from "./FooterSocial/FooterSocial";

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <FooterInfo />
          <FooterSocial />
          <FooterCommunication />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
