import style from "./Contacts.module.scss";
import contacts from "../../assets/images/contacts.png";
import ContactsForm from "./ContactsForm";

const Contacts = () => {
  return (
    <section className={style.contacts}>
      <h1 className={style.heading}>Any questions?</h1>
      <div className={style.formImg}>
        <img src={contacts} alt="Contact us" width={250} />
        <ContactsForm />
      </div>
    </section>
  );
};

export default Contacts;
