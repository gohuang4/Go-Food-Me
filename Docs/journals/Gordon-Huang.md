Day 1:
Created an excalidraw to plan out everything
Created all the md files and added content

Day 2:
Decided on MVP features and framework
Decided on technologies
Doing FAST API

08/22/2022
Made our MVP more of an MVP by simplifying the MVP
Took out the delivery aspect of the project and made it more similar Go Fund Me.
Decided on making the delivery part a stretch goal
Decided on using a Kroger API rather than also the InstaCart API
Considering using MongoDB

08/23/2022
MADE FAST APIs 
Got 4/5 to work after debugging
Got 5/5 to work after debugging
Got POST, PUT, GET, DELETE, GET detail

08/24/2022
Tried to make fields optional for the PUT request, but we are hard stuck on it
Attempted to use field: Optional[str] = None with no progress 
Fields are still listed as requirements for making a put request
Decided to figure out how to create a unique identifier for posts, accounts, payments

08/25/2022
Figured out how to make fields optional though using if statements in the database file
Also figured out a way to do it on the [main.py](http://main.py) file 
Currently trying to figure out how to make a unique identifier 

08/29/2022
Over the weekend Nick got a working home page along with other static pages with a navigation bar working that goes to those static pages.

08/30/2022
Currently doing more research on using React Hooks on a form. Spent the rest of the day doing research and went through several youtube videos. Incorporated what I could from the videos on Learn

09/01/2022
Did more research on Reach hooks and tried other ways to implement the handleSubmit with hooks. Spent more time doing research on youtube and found some useful videos on it.

09/02/2022
was able to get some direction going to implement the handlesubmit through a react youtube video. Implementing the handleSubmit is a lot closer to using a class component than I thought. Still having some issues

09/05/2022
Was able to get some more guidance on getting the handle submit to work. The form is having issues connecting to the backend. It seems like our biggest issue is connecting the front end to the backend.

09/06/2022
After getting some instructor help we added some fields to the body. Nick was able to finalize the changes to get the form to actually work and connect to the back end.

09/07/2022
After finallying getting the post form to work after implementing fields into the fast api and on the form body, we applied it to other forms. Other forms are now working based off of the code from the post form.

09/08/2022
We are still struggling on auth and ci/cd. It sounds like we would have to change our IDs in order for auth to work.

09/09/2022
the last few things we need are just auth and deployment. Our list page for our fundraisers is essentially finished as well.

09/12/2022
detail page is now completed along with the list page. THe delete button has been implemented on the detail page as well for the specific fundraiser

09/13/2022
added the update feature to the detail page
got the update button to work
got the update button to redirect to the upate form
update form fields fill out 