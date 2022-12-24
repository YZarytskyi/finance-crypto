import ContactsForm from "./ContactsForm";
import style from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <section className={style.contacts}>
      <h1 className={style.heading}>Any questions?</h1>
      <div className={style.formImg}>
        <div className={style.image}></div>
        <ContactsForm />
      </div>
    </section>
  );
};

export default Contacts;
