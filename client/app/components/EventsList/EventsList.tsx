import EventsCard from "../EventsCard/EventsCard";

import type { IEventsCard } from "~/data/EventsCardsData";

interface EventsListProps {
  filteredEventsCards: IEventsCard[];
}

const EventsList = ({ filteredEventsCards }: EventsListProps) => {
  return (
    <ul className="events__list">
      {filteredEventsCards.map(({ id, imageSrc, title, author, location, category }) => (
        <li className="events__item" key={id}>
          <EventsCard
            imageSrc={imageSrc}
            title={title}
            author={author}
            location={location}
            category={category}
          />
        </li>
      ))}
    </ul>
  );
};

export default EventsList;
