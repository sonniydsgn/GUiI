import "./EventsCard.scss";

import type { IEventsCard } from "~/data/EventsCardsData";

import LinkWithArrow from "../LinkWithArrow/LinkWithArrow";

const EventsCard = ({ imageSrc, title, author, location, category}: IEventsCard) => {
  return (
    <article className="events-card">
      <div className="events-card__inner">
        <div className="events-card__wrapper-image">
          <img
            src={imageSrc}
            alt=""
            className="events-card__image"
            width={320}
            height={188}
            loading="lazy"
          />
        </div>

        <div className="events-card__body">
          <h3 className="events-card__title body-l-medium">{title}</h3>

          <div className="events-card__info">
            <p className="events-card__author">{author}</p>
            <p className="events-card__location">{location}</p>
          </div>
        </div>

        <LinkWithArrow className="events-card__link" href="/">
          Подробнее
        </LinkWithArrow>
      </div>
    </article>
  );
};

export default EventsCard;
