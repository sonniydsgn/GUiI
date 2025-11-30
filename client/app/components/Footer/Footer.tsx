import "./Footer.scss";

import Logo from "../Logo/Logo";

import { FooterActionsData } from "../../data/FooterActionsData";

import FooterAction from "../FooterAction/FooterAction";
import FooterSoc1als from "../FooterSoc1als/FooterSoc1als";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__top-inner container">
          <Logo className="footer__logo" />

          <div className="footer__header">
            <div className="footer__address">
              <p className="footer__address-title">Адрес кафедры</p>
              <p className="footer__address-description">
                614990, Пермский край, г. Пермь, Комсомольский проспект, д. 29,
                корпус А, ауд. 209
              </p>
            </div>

            <FooterSoc1als />
          </div>

          <div className="footer__actions">
            {FooterActionsData.map(({ id, title, links }) => (
              <FooterAction title={title} links={links} key={id} />
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner container">
          <small className="footer__copyright body-xs-medium">
            © <time dateTime={currentYear.toString()}>{currentYear}</time>{" "}
            Пермский Политех
          </small>

          <a href="/" className="footer__authors body-xs-medium">
            Сделано студентами МТИД-23-1б
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
