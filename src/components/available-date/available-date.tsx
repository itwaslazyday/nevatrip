import './available-date.css';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import { useState } from 'react';

dayjs.extend(isToday);
dayjs.extend(isTomorrow);

type AvailableDateProps = {
  nearestDate: Date | undefined;
  timeMarks: string[];
};
const TABLET_CONTROL_MARK = 768;

const getTimeMarkNumber = (): number => {
  const markNumber = window.innerWidth <= 975 ? Math.floor(window.innerWidth / 170) - 1 : 5;
  return markNumber;
};

let previewNumber = window.innerWidth >= TABLET_CONTROL_MARK ? getTimeMarkNumber() : 3;

const getNearestDay = (nearestDate: Date | undefined) => {
  if (dayjs(nearestDate).isToday()) {
    return ('сегодня');
  } else if (dayjs(nearestDate).isTomorrow()) {
    return ('завтра');
  }
  return ('');
};

function AvailableDate ({nearestDate, timeMarks}: AvailableDateProps): JSX.Element {
  const changeTimeMarkNumber = () => {
    previewNumber = window.innerWidth >= TABLET_CONTROL_MARK ? getTimeMarkNumber() : 3;
    setTimeMarksNumber(previewNumber);
  };

  window.addEventListener('resize', () => changeTimeMarkNumber());

  const [timeMarksNumber, setTimeMarksNumber] = useState<number>(previewNumber);

  return (
    <li className="card__features-item nearest">
      <span className="nearest__text">
        {`Ближайший рейс: ${getNearestDay(nearestDate)}`}
      </span>
      <ul className="nearest__time-list list-reset">
        {timeMarks.slice(0, timeMarksNumber).map((time: string) => (
          <li key={time} className="nearest__time-item">
            <a className="nearest__time-link" href="/">{time}</a>
          </li>
        ))}
        <li
          className={`
            nearest__time-item
            ${timeMarks.length <= previewNumber ? 'nearest__time-item--display' : ''}
          `}
        >
          <button
            className="nearest__more"
            onClick={() => setTimeMarksNumber(timeMarksNumber !== timeMarks.length ? timeMarks.length : previewNumber)}
          >
            {timeMarksNumber !== timeMarks.length ? 'ещё...' : 'Х'}
          </button>
        </li>
      </ul>
    </li>
  );
}

export default AvailableDate;
