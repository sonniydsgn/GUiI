import "./FooterAction.scss";

import type { IFooterAction } from "../../data/FooterActionsData";

const FooterAction = ({ title, links }: IFooterAction) => {
  return (
    <div className="footer-action">
      <p className="footer-action__title">{title}</p>
      <ul className="footer-action__list">
        {links.map(({ id, src, text }) => (
          <li className="footer-action__item" key={id}>
            <a href={src} className="footer-action__link">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterAction;
