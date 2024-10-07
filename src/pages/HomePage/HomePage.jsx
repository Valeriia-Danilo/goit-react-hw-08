import css from "./HomePage.module.css";

export default function HomePage() {
    return <div className={css.container}>
       <p className={css.title}> Welcome to the contact book!</p>
       <p className={css.text}>Here, you can easily store, manage, and access all your important contacts in one place.
            Whether adding new contacts, updating information, or searching through your list,
            our tool makes contact management simple and efficient.</p>
    </div>
}