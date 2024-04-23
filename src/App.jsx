import React, { useState, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import "./App.css";

const App = () => {
 

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox  />
      <ContactList />
    </div>
  );
};

export default App;
