import style from "./Contacts.module.scss";
import contacts from "../../assets/images/contacts.png";
import ContactsForm from "./ContactsForm";

const Contacts = () => {
  return (
    <section className={style.contacts}>
      <div className={style.heading}>
        <h1>Any questions?</h1>
        <hr />
      </div>
      <div className={style.formImg}>
        <div className={style.img}>
          <img src={contacts} alt="Contact us" width={250} />
        </div>
        <ContactsForm />
      </div>
    </section>
  );
};

export default Contacts;
