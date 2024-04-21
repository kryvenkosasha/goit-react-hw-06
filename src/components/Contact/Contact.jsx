import React from "react";
import './Contact.css'

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;

  const handleClick = () => {
    onDelete(id);
  };

  return (
    <li className="contact-item">
      <p>{name}</p>
      <p> {number}</p>
      <button onClick={handleClick}>Delete</button>
    </li>
  );
};

export default Contact;
