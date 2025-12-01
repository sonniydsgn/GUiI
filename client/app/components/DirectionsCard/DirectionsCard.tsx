import "./DirectionsCard.scss";

import LinkWithArrow from "../LinkWithArrow/LinkWithArrow";

import type { IDirectionsCard } from "~/data/DirectionsCardsData";

const DirectionsCard = ({
  Icon,
  title,
  description,
  tags,
}: IDirectionsCard) => {
  return (
    <article className="directions-card">
      <Icon />

      <div className="directions-card__body">
        <div className="directions-card__content">
          <h3 className="directions-card__title">{title}</h3>
          <p className="directions-card__description">{description}</p>
        </div>

        <div className="directions-card__tags">
          {tags.map((tag) => (
            <p className="directions-card__tag body-s-regular" key={tag}>
              {tag}
            </p>
          ))}
        </div>
      </div>

      <LinkWithArrow className="directions-card__link" href="/">
        Подробнее
      </LinkWithArrow>
    </article>
  );
};

export default DirectionsCard;
