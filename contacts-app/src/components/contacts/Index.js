import React, { useState, useEffect } from 'react'
import Form from './form/Index.js'
import List from './list/Index.js'
import '../contacts/Styles.css'

function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div id="container" >
            <h1>Contacts</h1>
            <List contacts={contacts} />
            <Form contacts={contacts} addContact={setContacts} />
        </div>
    )
}
export default Contacts;