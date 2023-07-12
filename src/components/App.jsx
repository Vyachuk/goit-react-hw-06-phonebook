import { Wrapper } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { ContactSection } from './ContactSection/ContactSection';
import { ContactsSerchField } from './ContactsSerchField/ContactsSerchField';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';

export const App = () => {
  return (
    <Wrapper>
      <PhoneBookForm />
      <ContactSection>
        <ContactsSerchField />
        <ContactList />
      </ContactSection>
    </Wrapper>
  );
};
