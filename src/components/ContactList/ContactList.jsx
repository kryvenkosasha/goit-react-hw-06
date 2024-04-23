import React from "react";
import Contact from "../Contact/Contact.jsx";
import "./ContactList.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div>
      <h2>Contacts</h2>
      <ul className="contacts-list">
        {filteredContacts.map(({ id, name, number }) => (
          <Contact key={id} name={name} id={id} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
