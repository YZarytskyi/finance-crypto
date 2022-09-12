import style from './Contacts.module.scss'
import contacts from '../../assets/images/contacts.png'
import ContactsForm from './ContactsForm';


const Contacts = () => {
  return(
    <div className={style.contacts}>
      <div className={style.heading}>
          <h1>Have some questions?</h1>
          <hr />
      </div>
      <div className={style.formImg}>
        <div>
          <img src={contacts} alt="Contact us" width={250} />
        </div>
        <div>
          <ContactsForm />
        </div>
      </div>
    </div>
  );
};

export default Contacts;