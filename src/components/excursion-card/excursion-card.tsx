import './excursion-card.css';
import {Card} from 'types/types';

type CardProps = {
  card: Card;
};

function ExcursionCard ({card}: CardProps): JSX.Element {
  const {id, tipText, tipBackground, title, features, priceOnline, priceOffline} = card;
  return (
    <article className="card">
      <a className="card__image-link" href='/'>
        <span className="card__image-tip" style={{backgroundColor: tipBackground}}>{tipText}</span>
        <picture>
          {/* <source
            media="(min-width: 768px)"
            srcSet="img/products/pro-500-chicken-tablet@1x.png 1x, img/products/pro-500-chicken-tablet@2x.png 2x"
          /> */}
          <img className="card__image"
            src={`img/excursions/${id}@1x.jpg`}
            srcSet={`img/excursions/${id}@2x.jpg 2x`}
            width="341"
            height="220"
            alt={title}
          />
        </picture>
      </a>
      <div className="card__description">
        <h3 className="card__title">
          <a className="card__title-link" href='/'>{title}</a>
        </h3>
        <span className="card__runtime-duration"></span>
        <ul className="card__features list-reset">
          {features.map((feature: string) => (
            <li key={feature} className="card__features-item">{feature}</li>
          ))}
        </ul>
        <div className="card__about-wrapper">
          <div className="card__price-wrapper">
            <span className="card__price-online">{`${priceOnline} ₽`}</span>
            <span className="card__price-offline">{`${priceOffline} ₽ на причале`}</span>
          </div>
          <button className="card__about-button">Подробнее</button>
        </div>
      </div>
    </article>
  );
}

export default ExcursionCard;
