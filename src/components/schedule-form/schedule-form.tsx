import {scheduleData} from 'mock/mock';
import { FormState } from 'types/types';
import { useState } from 'react';
import './schedule-form.css';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

type ScheduleFormProps = {
  handleFormSubmit: (evt: React.FormEvent<HTMLFormElement>, state: FormState) => void;
}

const ONE_WAY_TIME = 50;

function ScheduleForm ({handleFormSubmit}: ScheduleFormProps): JSX.Element {
  const getAvailableBackTimes = (selectedTimeTo: string) => {
    const availableBackTimes = [...scheduleData.scheduleTimeBack.slice().filter(
      (time) => dayjs.duration((dayjs(time)).diff(dayjs(selectedTimeTo))).asMinutes() >= ONE_WAY_TIME)];
    return(availableBackTimes);
  };

  const [formState, setFormState] = useState<FormState>(
    {
      route: 'ab',
      timeTo: scheduleData.scheduleTimeTo[0],
      timeBack: getAvailableBackTimes(scheduleData.scheduleTimeTo[0])[0],
      availableBackTimes: getAvailableBackTimes(scheduleData.scheduleTimeTo[0]),
      selected: false,
      ticketsNumber: 0
    });

  return (
    <form className="schedule__form" action="" method="post" onSubmit={(evt) => handleFormSubmit(evt, formState)}>
      <label className="schedule__label" htmlFor="route">Направление поездки:</label>
      <select
        className="schedule__select basic-field"
        name="route"
        id="route"
        autoFocus
        onChange={(evt) => setFormState({...formState, route: evt.target.value})}
      >
        {Object.keys(scheduleData.scheduleRoute).map((key) => (
          <option key={key} value={`${key}`}>
            {scheduleData.scheduleRoute[key]}
          </option>)
        )}
      </select>
      <label className="schedule__label" htmlFor="timeTo">Время отправления туда:</label>
      <select
        className="schedule__select basic-field"
        name="timeTo"
        id="timeTo"
        onChange={(evt) => setFormState({
          ...formState, timeTo: evt.target.value,
          availableBackTimes: getAvailableBackTimes(evt.target.value),
          timeBack: formState.selected ? formState.timeBack : getAvailableBackTimes(evt.target.value)[0]})}
      >
        {scheduleData.scheduleTimeTo.map((time) => (
          <option key={time} value={`${time}`}>
            {dayjs(time).format('HH[:]mm')}
          </option>)
        )}
      </select>
      <label
        className={`schedule__label ${formState.route === 'aba' ? '' : 'schedule__label--opacity'}`}
        htmlFor="timeBack"
      >
        Время отправления обратно:
      </label>
      <select
        className="schedule__select basic-field"
        name="timeBack"
        id="timeBack"
        onChange={(evt) => setFormState({...formState, timeBack: evt.target.value, selected: true})}
        disabled={formState.route !== 'aba'}
      >
        {formState.availableBackTimes.map((time) => (
          <option
            key={time}
            value={`${time}`}
          >
            {dayjs(time).format('HH[:]mm')}
          </option>)
        )}
      </select>
      <label className="schedule__label" htmlFor="tickets">Количество билетов:</label>
      <input
        className="schedule__input basic-field"
        name="tickets"
        id="tickets"
        type="number"
        min="1"
        max="50"
        onChange={(evt) => setFormState({...formState, ticketsNumber: Number(evt.target.value)})}
        required
      />
      <button className="schedule__submit basic-button" type="submit">Рассчитать стоимость</button>
    </form>
  );
}

export default ScheduleForm;
