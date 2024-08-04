import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { selectFilteredContacts } from "../../redux/selectors";
import "./ContactList.module.css";

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className="ContactList">
            {contacts.map(({ id, name, phone }) => (
                <li key={id}>
                    {name}: {phone}
                    <button onClick={() => handleDelete(id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
