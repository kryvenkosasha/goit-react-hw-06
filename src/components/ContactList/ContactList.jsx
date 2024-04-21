import React from "react";
import Contact from "../Contact/Contact.jsx";
import './ContactList.css'

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul className="contacts-list">
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
