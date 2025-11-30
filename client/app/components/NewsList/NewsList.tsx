import { NewsCardsData } from "~/data/NewsCardsData";

import NewsCard from "../NewsCard/NewsCard";

const NewsList = () => {
  return (
    <ul className="news__list">
      {NewsCardsData.map(({ imageSrc, category, text, publishedAt, id }) => (
        <li className="news__item" key={id}>
          <NewsCard
            imageSrc={imageSrc}
            category={category}
            text={text}
            publishedAt={publishedAt}
          />
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
