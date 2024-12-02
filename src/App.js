import React, { useState } from "react";
import SearchForm from "./components/SearchForm";
import ContactTable from "./components/ContactTable";
import ContactDetails from "./components/ContactDetails";
import contactsData from "./data/contacts.json";

const App = () => {
  const [filteredContacts, setFilteredContacts] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSearch = (filters) => {
    const filtered = contactsData.filter((contact) =>
      Object.keys(filters).every((key) =>
        filters[key]
          ? String(contact[key] || "")
              .toLowerCase()
              .includes(filters[key].toLowerCase())
          : true
      )
    );

    // Clear selected contact if no results are found
    if (filtered.length === 0) {
      setSelectedContact(null);
    }

    setFilteredContacts(filtered);
  };

  return (
    <div className="app">
      <h1>Contact Search Feature</h1>
      <SearchForm onSearch={handleSearch} />
      <ContactTable
        contacts={filteredContacts}
        onSelect={setSelectedContact}
      />
      {filteredContacts.length === 0 ? (
        <p style={{ textAlign: "center", fontStyle: "italic", marginTop: "20px" }}>
          No contacts found.
        </p>
      ) : selectedContact ? (
        <ContactDetails contact={selectedContact} />
      ) : (
        <p style={{ textAlign: "center", fontStyle: "italic", marginTop: "20px" }}>
          No contact selected.
        </p>
      )}
    </div>
  );
};

export default App;
