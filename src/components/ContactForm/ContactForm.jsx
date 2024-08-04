import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import "./ContactForm.module.css";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addContact({ name, phone }));
        setName("");
        setPhone("");
    };

    return (
        <form onSubmit={handleSubmit} className="ContactForm">
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Phone:
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </label>
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default ContactForm;
