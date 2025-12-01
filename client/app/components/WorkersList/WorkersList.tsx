import { WorkersCardsData } from "~/data/WorkersCardsData";

import WorkersCard from "../WorkersCard/WorkersCard";

const WorkersList = () => {
  return (
    <ul className="workers__list">
      {WorkersCardsData.map(({ imageSrc, name, profession, description, id }) => (
        <li className="workers__item" key={id}>
          <WorkersCard
            imageSrc={imageSrc}
            name={name}
            profession={profession}
            description={description}
          />
        </li>
      ))}
    </ul>
  );
};

export default WorkersList;
