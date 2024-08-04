import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import "./App.module.css";

const App = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.contacts);

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className="App">
            <h1>Книга контактів</h1>
            <ContactForm />
            <Filter />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ContactList />
        </div>
    );
};

export default App;
