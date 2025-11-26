import "./DirectionsList.scss";

import DirectionsCard from "../DirectionsCard/DirectionsCard";
import { DirectionsCardData } from "~/data/DirectionsCardData";

const DirectionsList = () => {
  return (
    <ul className="directions__list">
      {DirectionsCardData.map(({ Icon, title, description, tags }) => (
        <li className="directions__item">
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
