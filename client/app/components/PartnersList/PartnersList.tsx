import { PartnersData } from "~/data/PartnersData";

const PartnersList = () => {
  const duplicatePartnersData = [...PartnersData, ...PartnersData];

  return (
    <ul className="partners__list">
      {duplicatePartnersData.map((partner) => (
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
