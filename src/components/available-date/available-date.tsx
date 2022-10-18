import './available-date.css';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday';
import isTomorrow from 'dayjs/plugin/isTomorrow';
import { useState } from 'react';

dayjs.extend(isToday);

type AvailableDateProps = {
  nearestDate: Date | undefined;
  timeMarks: string[];
};

let previewNumber = window.innerWidth >= 768 ? 6 : 3;

const getNearestDay = (nearestDate: Date | undefined) => {
  // console.log(nearestDate);
  if (dayjs().isToday()) {
    return ('сегодня');
  } else if (dayjs().isTomorrow()) {
    return ('завтра');
  }
  return ('');
};

function AvailableDate ({nearestDate, timeMarks}: AvailableDateProps): JSX.Element {
  const changeTimeMarkNumber = () => {
    previewNumber = window.innerWidth >= 768 ? 6 : 3;
    setTimeMarksNumber(previewNumber);
  };

  window.addEventListener('resize', () => changeTimeMarkNumber());

  const [timeMarksNumber, setTimeMarksNumber] = useState<number>(previewNumber);

  return (
    <div className="nearest card__features-item">
      <span className="nearest__text">
        {`Ближайший рейс: ${getNearestDay(nearestDate)}`}
      </span>
      <ul className="nearest__time-list list-reset">
        {timeMarks.slice(0, timeMarksNumber).map((time: string) => (
          <li key={time} className="nearest__time-item">
            <a className="nearest__time-link" href="/">{time}</a>
          </li>
        ))}
        <button
          className={`
            nearest__time-item
            nearest__time-item--more
            ${timeMarks.length <= previewNumber ? 'nearest__time-item--display' : ''}
          `}
          onClick={() => setTimeMarksNumber(timeMarksNumber !== timeMarks.length ? timeMarks.length : previewNumber)}
        >
          {timeMarksNumber !== timeMarks.length ? 'ещё...' : 'Х'}
        </button>
      </ul>
    </div>
  );
}

export default AvailableDate;
