import { Link } from 'react-router-dom';
import './extra-block.css';
import {AppRoute} from 'const/enums';

function ExtraBlock (): JSX.Element {

  return (
    <article className="card extra">
      <ul className="extra__list list-reset">
        <li className="extra__list-item">
          <Link className="extra__link card__about-link" to={AppRoute.Tickets}>JS. Part 1</Link>
        </li>
        <li className="extra__list-item">
          <Link className="extra__link card__about-link" to={AppRoute.Schedule}>JS. Part 2</Link>
        </li>
      </ul>
    </article>
  );
}

export default ExtraBlock;
