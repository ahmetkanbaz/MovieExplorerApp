import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import {IoLocation} from 'react-icons/io5'
const FooterCommunication = () => {
  return (
    <div className="col-md-4 col-12">
      <h4>İletişim Bilgileri</h4>
      <div className="mt-4">
        <a href="tel:05383535673">
          <FaPhone className="me-2" />
          05383535673
        </a>
      </div>
      <div className="my-3">
        <a href="mailto:ahmetkanbaz@gmail.com">
          <MdEmail className="me-2" />
          ahmetkanbaz@gmail.com
        </a>
      </div>
      <div>
      <a href="https://www.google.com/maps/place/Mersin+Akdeniz" target="_blank" rel="noreferrer">
          <IoLocation className="me-2" />
          Akdeniz / MERSİN
        </a>
      </div>
    </div>
  );
};

export default FooterCommunication;
