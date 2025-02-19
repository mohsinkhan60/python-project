/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const ContactsList = ({contacts, updateContact, updateCallBack}) => {
  return (
    <div>
      <h2>Contacts</h2>
      <table>
         <thead>
            <tr>
               <th>First Name</th>
               <th>Last Name</th>
               <th>Email</th>
               <th>Actions</th>
            </tr>
         </thead>
         <tbody>
            {contacts.map((contact) => (
               <tr key={contact.id}>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.email}</td>
                  <td>
                     <button onClick={() => updateContact(contact)}>update</button>
                     <button>delete</button>
                  </td>
               </tr>
            ))}
         </tbody>
      </table>
    </div>
  )
}
export default ContactsList