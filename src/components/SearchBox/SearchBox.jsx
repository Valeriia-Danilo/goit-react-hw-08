import css from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import { useSelector, useDispatch } from "react-redux";


export default function SearchBox() {
    const filters = useSelector(selectNameFilter);
    const dispatch = useDispatch();


        const onFilter = (e) => {
        const filterValue = e.target.value; 
        dispatch(changeFilter(filterValue)); 
    };
    
    

    return (
        <div className={css.container}>
            <p className={css.title}>Find contacs by name</p>
            <input className={css.searchInput} type="text" value={filters} onChange={onFilter} />
        </div>
    );
}