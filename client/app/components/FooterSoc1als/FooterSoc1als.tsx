import "./FooterSoc1als.scss";

import { FooterSoc1alsData } from "~/data/FooterSoc1alsData";

const FooterSoc1als = () => {
  return (
    <div className="footer-soc1als">
      {FooterSoc1alsData.map(({ Icon, id, label, href }) => (
        <a href={href} className="footer-soc1als__link" key={id}>
          <Icon/>

					<span className="visually-hidden">{label}</span>
        </a>
      ))}
    </div>
  );
};

export default FooterSoc1als;
