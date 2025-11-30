import DirectionsCard from "../DirectionsCard/DirectionsCard";
import { DirectionsCardsData } from "~/data/DirectionsCardsData";

const DirectionsList = () => {
  return (
    <ul className="directions__list">
      {DirectionsCardsData.map(({ Icon, title, description, tags, id }) => (
        <li className="directions__item" key={id}>
          <DirectionsCard
            Icon={Icon}
            title={title}
            description={description}
            tags={tags}
          />
        </li>
      ))}
    </ul>
  );
};

export default DirectionsList;
