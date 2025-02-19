import { useEffect, useState } from "react";
import "./App.css";
import ContactsList from "./ContactsList";
import ContactsForm from "./ContactsForm";

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState({});

  useEffect(() => {
    fatchContacts();
  });

  const fatchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts");
    const data = await response.json();
    setContacts(data.contacts);
    // console.log(data.contacts);
  };

  const closeModel = () => {
    setIsModelOpen(false);
    setCurrentContact({})
  };

  const openCreateModel = () => {
    setIsModelOpen(true);
  };
  const openEditModal = (contact) => {
    if (isModelOpen) return
    setCurrentContact(contact)
    setIsModelOpen(true)
    };

  const onUpdate = () => {
    closeModel()
    fatchContacts()
  }

  return (
    <div>
      <ContactsList contacts={contacts} updateContact={openEditModal} updateCallBack={onUpdate} />
      <button onClick={openCreateModel}>Create New Contact</button>
      {isModelOpen && (
        <div className="model">
          <div className="model-content">
            <span className="close" onClick={closeModel}>close</span>
            <ContactsForm existingContact={currentContact} updateCallBack={onUpdate} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
