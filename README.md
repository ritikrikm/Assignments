Contact Search Feature
Overview
This project is a Contact Search Feature built with React. It allows users to search, filter, and sort through a list of contacts using multiple criteria, such as name, date of birth, email, address, city, state, and more. It also includes pagination and a dynamic contact details section to display information about the selected contact.

Features
Search Filters:

Search contacts by First Name, Last Name, DOB, Email, Phone, Address, City, State, and Zip Code.
Real-time search filtering updates the contact list dynamically.
Sorting:

Sort contacts by Name, Date of Birth (DOB), or City in ascending or descending order.
Pagination:

Handles large datasets with pagination controls (Previous/Next buttons).
Contact Selection:

Displays detailed information about the selected contact below the table.
Shows a fallback message ("No contact selected") when no contact is selected.
Responsive UI:

Built using Material-UI to ensure the interface works seamlessly across devices.
How It Works
Search:

Enter a value in any of the search fields and see the table dynamically update with matching contacts.
If no matches are found, a message ("No contacts found.") is displayed.
Sort:

Click on the column headers (Name, DOB, City) to sort the data.
Arrows (↑ / ↓) indicate the current sorting direction.
Pagination:

Navigate through the contact list using the Previous/Next buttons.
Pagination buttons are disabled when there are no results or when you reach the beginning/end.
Contact Details:

Select a contact using the radio button in the table to view their details below the table.
If no contact is selected, a message ("No contact selected.") is displayed.
Technologies Used
Frontend: React.js, Material-UI
Styling: CSS-in-JS (via Material-UI)
State Management: React useState
Data: Static JSON file (mock data)


#Ritik Mehta 