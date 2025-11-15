import { CITIES } from '../../constants.ts';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks/hooks.ts';
import { changeCity } from '../../store/action/sort-action.ts';

type CitiesListProps = {
  currentCity: string;
};

function CitiesList({ currentCity }: CitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city} className="locations__item">
              <Link
                className={`locations__item-link tabs__item ${city === currentCity ? 'tabs__item--active' : ''}`}
                to="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(changeCity(city));
                }}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export { CitiesList };
