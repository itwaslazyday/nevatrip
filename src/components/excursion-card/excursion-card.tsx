import './excursion-card.css';
import {Card} from 'types/types';
import {getRuntime} from 'utils/utils';
import AvailableDate from 'components/available-date/available-date';

type CardProps = {
  card: Card;
};

function ExcursionCard ({card}: CardProps): JSX.Element {
  const {id, tipText, tipBackground, title, runtime, features, nearestDate, timeMarks, priceOnline, priceOffline} = card;
  const runtimeDuration = getRuntime(runtime);

  return (
    <article className="card">
      <a className="card__image-link" href='/'>
        <span className="card__image-tip" style={{backgroundColor: tipBackground}}>{tipText.toUpperCase()}</span>
        <picture>
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
        <div className="card__features-wrapper">
          <h3 className="card__title">
            <a className="card__title-link" href='/'>{title}</a>
          </h3>
          <span className="card__runtime-duration">
            {`
              ${runtimeDuration.hours || ''}
              ${runtimeDuration.hoursPrefix}
              ${runtimeDuration.minutes || ''}
              ${runtimeDuration.minutesPrefix}
            `}
          </span>
          <ul className="card__features list-reset">
            {features.map((feature: string, idx: number) => (
              <li
                key={feature}
                className={`card__features-item ${!nearestDate && (features.length - 1) === idx ? 'card__features-item--margin' : ''}`}
              >
                {feature}
              </li>
            ))}
          </ul>
          {timeMarks?.length && <AvailableDate nearestDate={nearestDate} timeMarks={timeMarks}/>}
        </div>
        <div className="card__about-wrapper">
          <div className="card__price-wrapper">
            <span className="card__price-online">{`${priceOnline} ₽`}</span>
            {priceOffline && <span className="card__price-offline">{`${priceOffline} ₽ на причале`}</span>}
          </div>
          <a className="card__about-link" href="/">Подробнее</a>
        </div>
      </div>
    </article>
  );
}

export default ExcursionCard;
