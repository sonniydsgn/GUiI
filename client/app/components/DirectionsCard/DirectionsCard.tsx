import "./DirectionsCard.scss";

import LinkWithArrow from "../LinkWithArrow/LinkWithArrow";

interface DirectionsCardProps {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  tags: string[];
}

const DirectionsCard = ({
  Icon,
  title,
  description,
  tags,
}: DirectionsCardProps) => {
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
            <p className="directions-card__tag">{tag}</p>
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
