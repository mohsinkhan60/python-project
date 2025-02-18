import { useEffect, useState } from "react";
import "./App.css";
import ContactsList from "./ContactsList";
import ContactsForm from "./ContactsForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    fatchContacts();
  });

  const fatchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
    console.log(data.contacts);
  };

  const closeModel = () => {
    setIsModelOpen(false);
  };

  const openCreateModel = () => {
    setIsModelOpen(true);
  };

  return (
    <div>
      <ContactsList contacts={contacts} />
      <button onClick={openCreateModel}>Create New Contact</button>
      {isModelOpen && (
        <div className="model">
          <div className="model-content">
            <span className="close" onClick={closeModel}>close</span>
            <ContactsForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
