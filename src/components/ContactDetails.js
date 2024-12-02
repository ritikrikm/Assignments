import React from "react";
import { Box, Typography } from "@mui/material";


const ContactDetails = ({ contact }) => {
  if (!contact) {
    return (
      <Typography
        variant="body1"
        sx={{ textAlign: "center", mt: 2, fontStyle: "italic" }}
      >
        No contact selected.
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Contact Details
      </Typography>

      <Typography variant="body1">
        <strong>Name:</strong> {`${contact.firstName} ${contact.lastName}`}
      </Typography>

      <Typography variant="body1">
        <strong>Date of Birth:</strong> {contact.dob}

      </Typography>
      <Typography variant="body1">
        <strong>Email:</strong> {contact.email}
      </Typography>
      <Typography variant="body1">
        <strong>Phone:</strong> {contact.phone}
      </Typography>
      
      <Typography variant="body1">

        <strong>Address:</strong> {`${contact.address}, ${contact.city}, ${contact.state} - ${contact.zip}`}
      </Typography>
    </Box>
  );
};

export default ContactDetails;
