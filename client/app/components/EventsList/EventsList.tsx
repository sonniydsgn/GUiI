import { EventsCardsData } from "~/data/EventsCardsData";

import EventsCard from "../EventsCard/EventsCard";

const EventsList = () => {
  return (
    <ul className="events__list">
      {EventsCardsData.map(({ id, imageSrc, title, author, location }) => (
        <li className="events__item" key={id}>
          <EventsCard
            imageSrc={imageSrc}
            title={title}
            author={author}
            location={location}
          />
        </li>
      ))}
    </ul>
  );
};

export default EventsList;
