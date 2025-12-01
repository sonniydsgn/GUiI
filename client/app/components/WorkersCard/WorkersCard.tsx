import "./WorkersCard.scss";

import type { IWorkersCard } from "~/data/WorkersCardsData";

const WorkersCard = ({
  imageSrc,
  name,
  profession,
  description,
}: IWorkersCard) => {
  return (
    <article className="workers-card">
      <img
        src={imageSrc}
        alt=""
        className="workers-card__image"
        width={64}
        height={64}
        loading="lazy"
      />

      <div className="workers-card__inner">
        <div className="workers-card__header">
          <p className="workers-card__name">{name}</p>
          <p className="workers-card__profession body-s-regular">{profession}</p>
        </div>

        <p className="workers-card__description">{description}</p>
      </div>
    </article>
  );
};

export default WorkersCard;
