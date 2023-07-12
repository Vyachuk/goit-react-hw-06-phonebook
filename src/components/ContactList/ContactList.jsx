import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { selectContacts, selectFilter } from 'redux/selcetors';
import {
  ContactButton,
  ContactHumanList,
  ContactItem,
} from './ContactList.styled';

const getContactsFiltered = (contactsArray, filterData) => {
  return contactsArray.filter(contact =>
    contact.name.toLowerCase().includes(filterData.toLowerCase())
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredData = getContactsFiltered(contacts, filter);
  return (
    <ContactHumanList>
      {filteredData.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}: {contact.number}
          <ContactButton
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </ContactButton>
        </ContactItem>
      ))}
    </ContactHumanList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
