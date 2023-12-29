/* eslint-disable react/jsx-no-target-blank */
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import {FaMedium} from 'react-icons/fa6'
const FooterSocial = () => {
  return (
    <div className="col-md-4 col-sm-6 col-12 d-flex flex-column align-items-center">
      <h4>Sosyal Medya</h4>
      <div className="d-flex align-items-center flex-wrap mt-3 gap-3">
        <a
          href="https://github.com/ahmetkanbaz"
          className="btn btn-outline-primary d-flex align-items-center justify-content-center"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ahmet-kanbaz-156002242/"
          className="btn btn-outline-danger d-flex align-items-center justify-content-center"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="https://medium.com/@ahmetkanbaz"
          className="btn btn-outline-success d-flex align-items-center justify-content-center"
          target="_blank"
        >
          <FaMedium />
        </a>
        
      </div>
    </div>
  );
};

export default FooterSocial;
