import "./HeaderModal.scss";

import clsx from "clsx";

import { DirectionsCardsData } from "~/data/DirectionsCardsData";
import { HeaderModalLinksData } from "~/data/HeaderModalLinksData";

import HeaderModalCard from "../HeaderModalCard/HeaderModalCard";
import HeaderModalLink from "../HeaderModalLink/HeaderModalLink";

interface HeaderModalProps {
  isActive: boolean;
  onMouseLeave: () => void;
}

const HeaderModal = ({ isActive, onMouseLeave }: HeaderModalProps) => {
  return (
    <div
      className={clsx("header-modal", { "visually-hidden": !isActive })}
      onMouseLeave={onMouseLeave}
    >
      <div className="header-modal__inner">
        <div className="header-modal__cards">
          <ul className="header-modal__cards-list">
            {DirectionsCardsData.map(
              ({ id, title, shortDescription, Icon }) => (
                <li className="header-modal__cards-item" key={id}>
                  <HeaderModalCard
                    title={title}
                    description={shortDescription}
                    Icon={Icon}
                  />
                </li>
              )
            )}
          </ul>
        </div>
        <div className="header-modal__links">
          <p className="header-modal__links-title body-s-medium">
            Полезные ссылки
          </p>

          <ul className="header-modal__links-list">
            {HeaderModalLinksData.map(({ id, content, Icon, href }) => (
              <li className="header-modal__links-item" key={id}>
                <HeaderModalLink content={content} Icon={Icon} href={href} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderModal;
