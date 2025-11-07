import { useState } from 'react';
import { SortType } from '../../constants.ts';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks.ts';
import { changeSortType } from '../../store/reducer/sort-reducer.ts';
import { selectSortType } from '../../store/selectors.ts';

function SortOptions(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentSortType = useAppSelector(selectSortType);
  const [isOpened, setIsOpened] = useState(false);

  const handleSortTypeClick = (sortType: SortType) => {
    dispatch(changeSortType(sortType));
    setIsOpened(false);
  };

  const handleToggleClick = () => setIsOpened(!isOpened);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {' '}
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleClick}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {Object.values(SortType).map((type) => (
          <li
            key={type}
            className={`places__option ${currentSortType === type ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleSortTypeClick(type)}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export { SortOptions };
