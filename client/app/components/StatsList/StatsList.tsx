import StatsCard from "../StatsCard/StatsCard";

import { StatsCardsData } from "~/data/StatsCardsData";

const StatsList = () => {
  return (
    <ul className="stats__list">
      {StatsCardsData.map(({ count, characteristic, id }) => (
        <li className="stats__item" key={id}>
          <StatsCard count={count} characteristic={characteristic}/>
        </li>
      ))}
    </ul>
  );
};

export default StatsList;