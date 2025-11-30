import { PartnersData } from "~/data/PartnersData";

const PartnersList = () => {
  return (
    <ul className="partners__list">
      {PartnersData.map((partner) => (
        <li key={partner} className="partners__item">
          <img
            src={partner}
            alt=""
            className="partners__image"
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};

export default PartnersList;