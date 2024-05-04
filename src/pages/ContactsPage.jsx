import { useDispatch, useSelector } from "react-redux";
import ContactList from "../components/ContactList/ContactList";
import Loader from "../components/Loader/Loader";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contacts/operations";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import {
  selectContacts,
  selectError,
  selectLoading,
} from "../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {contacts && <ContactList />}
    </div>
  );
};

export default ContactsPage;