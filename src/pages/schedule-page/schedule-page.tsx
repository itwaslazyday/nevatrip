import './schedule-page.css';
import { Link } from 'react-router-dom';
import { AppRoute } from 'const/enums';
import ScheduleForm from 'components/schedule-form/schedule-form';
import Output from 'components/output/output';
import { useState } from 'react';
import { FormState } from 'types/types';

function SchedulePage (): JSX.Element {
  const [outputState, setOutputState] = useState<FormState | null>(null);

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>, state: FormState) => {
    evt.preventDefault();
    setOutputState(state);
  };

  return (
    <section className='schedule'>
      <h2 className='visually-hidden'>Расписание и стоимость отправлений</h2>
      <div className='schedule__wrapper container'>
        <ScheduleForm handleFormSubmit={handleFormSubmit}/>
        <Output output={outputState}/>
        <Link className="schedule__link basic-button" to={AppRoute.Main}>Вернуться на главную</Link>
      </div>
    </section>
  );
}

export default SchedulePage;

