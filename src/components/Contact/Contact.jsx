import { useDispatch } from "react-redux";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contacts = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactCard}>
      <div className={css.contactInfo}>
        <p className={css.contactText}>
          <BsFillPersonFill className={css.contactListIcon} />
          {contact.name}
        </p>
        <p className={css.contactText}>
          <BsFillTelephoneFill className={css.contactListIcon} />
          {contact.number}
        </p>
      </div>
      <button className={css.deleteBtn} onClick={onDeleteContact}>
        Delete
      </button>
    </div>
  );
};

export default Contacts;