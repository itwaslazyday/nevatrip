import {ticketsData} from 'mock/mock';
import {TicketsFormState} from 'types/types';
import {useState} from 'react';
import {datatype} from 'faker';
import './tickets-form.css';


type TicketsFormProps = {
  handleFormSubmit: (evt: React.FormEvent<HTMLFormElement>, state: TicketsFormState) => void;
}

function ScheduleForm ({handleFormSubmit}: TicketsFormProps): JSX.Element {

  const [formState, setFormState] = useState<TicketsFormState>(
    {
      adult: {
        price: 1000,
        quantity: 0,
        barcodes: []
      },
      child: {
        price: 700,
        quantity: 0,
        barcodes: []
      },
      social: {
        price: 600,
        quantity: 0,
        barcodes: []
      },
      special: {
        price: 500,
        quantity: 0,
        barcodes: []
      },
      id: 0,
      eventId: datatype.number({min: 100, max: 150}),
      eventDate: new Date(),
      userId: datatype.number({min: 1, max: 100000}),
      equialPrice: 0,
      created: new Date()

    });

  return (
    <form className="tickets__form" action="" method="post" onSubmit={(evt) => handleFormSubmit(evt, formState)}>
      <ul className="tickets__type-list list-reset">
        {ticketsData.map((item) => {
          const nameProperty = formState[item.type] as {price: number; quantity: number; barcodes: number[]};
          return (
            <li key={item.type} className="tickets__type-item">
              <label className="tickets__label" htmlFor={`${item.type}`}>{`${item.title}, ${item.price} р.`}</label>
              <button
                className="tickets__button"
                type="button"
                aria-label="Уменьшить количество билетов"
                disabled={nameProperty.quantity === 0}
                onClick={(evt) => {
                  setFormState({...formState,
                    equialPrice: Number(formState.equialPrice) - nameProperty.price,
                    [item.type]: {...nameProperty,
                      quantity: nameProperty.quantity - 1,
                      barcodes: [...nameProperty.barcodes.slice(0, nameProperty.barcodes.length - 1)]
                    }
                  });
                }}
              >
                <svg width="13" height="1" viewBox="0 0 13 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.3" d="M0 0L0 1L13 1V0L0 0Z" fill="black"></path>
                </svg>
              </button>
              <input
                className="tickets__input"
                type="number"
                name={`${item.type}`}
                id={`${item.type}`}
                value={nameProperty.quantity}
                onChange={() => ''}
                required
              />
              <button
                className="tickets__button"
                type="button"
                aria-label="Увеличить количество билетов"
                onClick={(evt) => {
                  setFormState({...formState,
                    equialPrice: Number(formState.equialPrice) + nameProperty.price,
                    [item.type]: {...nameProperty,
                      quantity: nameProperty.quantity + 1,
                      barcodes: [...nameProperty.barcodes, datatype.number({min: 10000, max: 50000}),]
                    }
                  });
                }}
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.3"><path d="M13 6H7V0H6V6H0V7H6V13H7V7H13V6Z" fill="black"></path></g>
                </svg>
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className="tickets__submit basic-button"
        type="submit"
        disabled={formState.equialPrice === 0}
      >
        Приобрести билеты
      </button>
    </form>
  );
}

export default ScheduleForm;
