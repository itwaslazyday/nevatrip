import './tickets-page.css';
import { Link } from 'react-router-dom';
import { AppRoute } from 'const/enums';
import TicketsForm from 'components/tickets-form/tickets-form';
import { useState } from 'react';
import { TicketsFormState } from 'types/types';

function TicketsPage (): JSX.Element {
  const [outputState, setOutputState] = useState<TicketsFormState[]>([]);

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>, state: TicketsFormState) => {
    evt.preventDefault();
    setOutputState([...outputState, {...state, id: outputState.length}]);
  };

  console.log('outputTable', outputState);

  return (
    <section className='tickets'>
      <h2 className='visually-hidden'>Покупка билетов на событие</h2>
      <div className='tickets__wrapper form-wrapper container'>
        <TicketsForm handleFormSubmit={handleFormSubmit}/>
        <p className='tickets__remark'>*Информация о приобретенных билетах выводится в консоль в виде объекта данных.</p>
        <Link className="tickets__link basic-button" to={AppRoute.Main}>Вернуться на главную</Link>
      </div>
    </section>
  );
}

export default TicketsPage;

