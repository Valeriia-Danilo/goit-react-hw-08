import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from '../App/App.module.css';
import "modern-normalize";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import { selectLoading, selectError } from '../../redux/contactsSlice';

export default function App() {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    
    return (
        <div className={css.container}>
            <h1 className={ css.title}>Phonebook</h1>
            <ContactForm/>
            <SearchBox />
            <div className={css.loaderContainer}>
            {loading && !error && <Loader />}
            {error && <p className={css.error}>No contacts available</p>}
            </div>
            {!error && <ContactList />}
</div>
    )
}

