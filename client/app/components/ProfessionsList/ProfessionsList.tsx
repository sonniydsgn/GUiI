import type { ProfessionsDirectionBlockItem } from "~/routes/directions.$direction";

interface ProfessionsListProps {
  data: ProfessionsDirectionBlockItem[];
  onClick: (id: number) => void;
}

const ProfessionsList = ({ data, onClick }: ProfessionsListProps) => {
  return (
    <ul className="professions__list">
      {data.map(({ id, title, image }) => (
        <li className="professions__item" key={id} onClick={() => onClick(id)}>
          <button type="button" className="professions__item-button">
            {/* <Icon /> */}
            <img
              src={`http://localhost:1337${image.url}`}
              alt=""
              className="professions__active-svg"
            />
            <h3 className="professions__item-title body-l-medium">{title}</h3>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProfessionsList;
