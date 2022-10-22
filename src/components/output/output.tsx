import { FormState } from 'types/types';
import {scheduleData} from 'mock/mock';
import dayjs from 'dayjs';

type OutputProps = {
  output: FormState | null;
}


function Output ({output}: OutputProps): JSX.Element {

  const getOutputText = (outputData: FormState | null) => {
    if (outputData) {
      return (`Вы выбрали ${outputData.ticketsNumber} билета(ов) по маршруту и${scheduleData.scheduleRoute[outputData.route].slice(1)}
        на сумму ${outputData.ticketsNumber * (outputData.route === 'aba' ? 1200 : 700)} рублей. Время в пути -
        ${(outputData.route === 'aba' ? '1 час 40' : 50)} минут. Теплоход отправляется в
        ${dayjs(outputData.timeTo).format('HH[:]mm')}, прибывает в ${dayjs(outputData.timeTo).add(50, 'minute').format('HH[:]mm')}.
        ${outputData.route === 'aba' ? `Обратный рейс начинается в ${dayjs(outputData.timeBack).format('HH[:]mm')}` : ''}
        Удачной прогулки!`);
    }
    return ('Здесь будет показана итоговая информация о вашей поездкe');
  };

  return (
    <p className="schedule__output">{getOutputText(output)}</p>
  );
}

export default Output;
