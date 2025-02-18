import { useEffect, useState } from "react";
import "./App.css";
import ContactsList from "./ContactsList";

function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    fatchContacts()
  })

  const fatchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/contacts")
    const data = await response.json()
    setContacts(data.contacts)
    console.log(data.contacts)
  }

  return <div>
    <ContactsList contacts={contacts} />
  </div>;
}

export default App;
