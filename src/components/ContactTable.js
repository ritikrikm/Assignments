import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const ContactTable = ({ contacts, onSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(contacts.length / itemsPerPage);
  const paginatedContacts = contacts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Select</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>City</TableCell>
            <TableCell>State</TableCell>
            <TableCell>Zip</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedContacts.length > 0 ? (
            paginatedContacts.map((contact) => (
              <TableRow key={contact.id}>
                <TableCell>
                  <input
                    type="radio"
                    name="selectedContact"
                    onChange={() => onSelect(contact)}
                  />
                </TableCell>
                <TableCell>{`${contact.firstName} ${contact.lastName}`}</TableCell>
                <TableCell>{contact.dob}</TableCell>
                <TableCell>{contact.address}</TableCell>
                <TableCell>{contact.city}</TableCell>
                <TableCell>{contact.state}</TableCell>
                <TableCell>{contact.zip}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={9} style={{ textAlign: "center" }}>
                No contacts found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {contacts.length > 0 && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          <Button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </Button>
          <span style={{ margin: "0 10px" }}>{currentPage}</span>
          <Button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </Button>
        </div>
      )}
    </TableContainer>
  );
};

export default ContactTable;
