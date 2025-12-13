import "./NewsCard.scss";

import LinkWithArrow from "../LinkWithArrow/LinkWithArrow";

import type { NewsItemAPI } from "../NewsList/NewsList";

const NewsCard = ({ text, photo, label, date, url }: NewsItemAPI) => {
  const formatDate = (unix: number) => {
    const d = new Date(unix * 1000);
    const nowYear = new Date().getFullYear();
    const year = d.getFullYear();

    const options: Intl.DateTimeFormatOptions =
      year === nowYear
        ? { day: "2-digit", month: "long" }
        : { day: "2-digit", month: "long", year: "numeric" };

    return d.toLocaleDateString("ru-RU", options);
  };

  return (
    <article className="news-card">
      <div className="news-card__wrapper-image">
        <img
          src={photo}
          alt=""
          className="news-card__image"
          width={364}
          height={222}
          loading="lazy"
        />
      </div>

      <div className="news-card__inner">
        <div className="news-card__body">
          <div className="news-card__info body-xs-medium">
            <span className="news-card__category">{label}</span> •{" "}
            <span className="news-card__date">{formatDate(date)}</span>
          </div>

          <p className="news-card__text">{text}</p>
        </div>

        <LinkWithArrow className="news-card__link" href={url}>
          Перейти к посту
        </LinkWithArrow>
      </div>
    </article>
  );
};

export default NewsCard;
