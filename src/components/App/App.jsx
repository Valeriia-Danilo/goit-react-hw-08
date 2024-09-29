import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactForm from '../ContactForm/ContactForm';
import css from '../App/App.module.css';
import "modern-normalize";

export default function App() {

    return (
        <div className={css.container}>
            <h1 className={ css.title}>Phonebook</h1>
            <ContactForm/>
            <SearchBox />
            <ContactList/>
</div>
    )
}

