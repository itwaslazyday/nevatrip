import ExcursionCard from 'components/excursion-card/excursion-card';
import {cards} from 'mock/mock';
import {Card} from 'types/types';

function Main (): JSX.Element {
  return (
    <div className='card-list'>
      {cards.map((card: Card) => <ExcursionCard key={card.id} card={card}/>)}
    </div>
  );
}

export default Main;
