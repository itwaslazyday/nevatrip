import ExcursionCard from 'components/excursion-card/excursion-card';
import ExtraBlock from 'components/extra-block/extra-block';
import {cards} from 'mock/mock';
import {Card} from 'types/types';

function Main (): JSX.Element {
  return (
    <section className='excursion-catalogue'>
      <h2 className='visually-hidden'>Водные прогулки и экскурсии</h2>
      <div className='card-list container'>
        {cards.map((card: Card) => <ExcursionCard key={card.id} card={card}/>)}
        <ExtraBlock/>
      </div>
    </section>
  );
}

export default Main;
