import css from './Contact.module.css';
import { FaUserLarge, FaPhone } from "react-icons/fa6";


export default function Contact({ value: { id, name, number }, onDelete }) {
    return (
        <div className={css.container}>
            <div className={css.containerInfo}>
                <p><FaUserLarge className={ css.iconPhone} />{name}</p>
                <p><FaPhone className={ css.iconPersone}/>{number}</p>
            </div>
            <button className={css.deleteButton} onClick={() => onDelete(id)} >Delete</button>
        </div>
    )
}