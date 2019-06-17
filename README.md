 Ticket-Master
 
Ticket master is a React web app to add and manage tickets.

Description
Ticket master is a React web app which provides functionalities to add a new ticket and display the existing tickets based on the status 
and prioritiy. 

In front-end add ticket form sends a post request the node server which accepts it and save them in the database
(which is MongoDB in our case). 

All the server calls are made in such a way to use the asynchronous nature of Javascript. 
\When the page is being loaded for the first time, it will send a get request to our node server for getting all the tickets and display 
them in a table. 

React state values are being used to maintaint the tickets and displaying them.

Installation/Dependencies
The npm packages create-react-app, express, mongoose and MongoDB software should be installed

npm install --save packageName
