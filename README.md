# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# View the Deployed Project on Heroku 
This project was deployed on Heroku and can be viewed at http://teenytinyexplorers.herokuapp.com/

# The database is deployed through Heroku add on ClearDB
The database was built on MySQL Workbench and then deployed to ClearDB 

# The project Teeny Tiny Explorers 

Teeny Tiny Explorers was create to serve as a tool for parents and care givers to have a location to find local nature based playgroups. Teeny Tiny Explorers includes a page "Find a Group" in which the user can find a group in their county. If there is a group in their county, they can then see the email address to the host to contact them. If there is not a group in the users county, they can submit a form to be a host on the "Become a Host" page. 

Hosts will be provided a login for the Admin Login page. Once host users are logged into the admin dashboard they can see the number of new groups in the past 7 days, and 30 days. They can also view the number of total groups. Hosts are also able to see the number of new members in the last 7 days, and the last 30 days. The number of total member are also view from the admin dashboard. 

Hosts can add and delete members and groups in the admin dashboard areas. Users that are not hosts can also create logins by going to the sign up page. The information input into the sign up page is added to the member table in the database. The member can then go to the login page and utilize their login credentials. The members will login and see a member landing page. 

There is additional functionality such as submitting contact forms. Users can submit a general concern or question on the contact page. The contact form in the project was connected to EmailJS. The form information will be sent to the email configured in the EmailJS account. The same process occurs on the page in which a user can submit to become a host. 

