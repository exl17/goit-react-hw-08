import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts && filteredContacts.length === 0 && (
        <li className={css.noContacts}> There are no contacts in your book</li>
      )}
      {filteredContacts.map((contact) => (
        <li className={css.contactListItem} key={contact.id}>
          <Contact
            contact={contact}
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;