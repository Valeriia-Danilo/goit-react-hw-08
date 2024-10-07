import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactForm from '../../components/ContactForm/ContactForm';
import css from '../ContactsPage/ContactPage.module.css';
import "modern-normalize";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader';
import { selectLoading, selectError } from '../../redux/contacts/selectors';

export default function ContactPage() {
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