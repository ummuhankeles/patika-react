import React, { useState, useEffect } from 'react'
import Form from './form/Index.js'
import List from './list/Index.js'

function Contacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div>
            <List contacts={contacts} />
            <Form contacts={contacts} addContact={setContacts} />
        </div>
    )
}
export default Contacts;