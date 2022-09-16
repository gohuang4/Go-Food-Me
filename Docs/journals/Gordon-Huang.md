Day 1:
Created an excalidraw to plan out everything
Created all the md files and added content
made a trello board to assign tasks

Day 2:
Decided on MVP features and framework
Decided on technologies
Doing FAST API
added tasksto trello board
Added a logo for our site along with a nice title header


08/22/2022
Made our MVP more of an MVP by simplifying the MVP
Took out the delivery aspect of the project and made it more similar Go Fund Me.
Decided on making the delivery part a stretch goal
Decided on using a Kroger API rather than also the InstaCart API
Considering using MongoDB

08/23/2022
Did a lot of research to get fast API to work
Going with the FARM stack methord of using FastAPI, React, MongoDB
Getting mongo DB to work with our models is a bit difficult
MADE FAST APIs work
Got 4/5 to work after debugging
Got 5/5 to work after debugging
Got POST, PUT, GET, DELETE, GET detail

08/24/2022
Tried to make fields optional for the PUT request, but we are hard stuck on it
Attempted to use field: Optional[str] = None with no progress 
Fields are still listed as requirements for making a put request
Decided to figure out how to create a unique identifier for posts, accounts, payments
Trying to figure out how to get IDs to work with mongo DB


08/25/2022
Figured out how to make fields optional though using if statements in the database file
Also figured out a way to do it on the [main.py](http://main.py) file 
Currently trying to figure out how to make a unique identifier 
Apparently mongo DB uses _id and it is automatically genereated .
We have issues accessing this id in order for us to use it for each post being created.

08/29/2022
Over the weekend Nick got a working home page along with other static pages with a navigation bar working that goes to those static pages.
Still struggling to use ids and we are currently trying to do research to see what we can do but fast API is limited in helpful resources since it's still relatively new.

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
we may need to add some more buttons on some pages for more functionality.


09/09/2022
the last few things we need are just auth and deployment. Our list page for our fundraisers is essentially finished as well.
We are having issues transferring the token over from login to another page.

09/12/2022
detail page is now completed along with the list page. THe delete button has been implemented on the detail page as well for the specific fundraiser
We plan to make the posts listed on the list page into cards.
img was added to each post

09/13/2022
added the update feature to the detail page
Needed to change the button to a link tag with a button className to make it into a button. 
Needed to change the url from post.id to just dynamic id, which initially caused the navigation to not work.
got the update button to work
got the update button to redirect to the upate form
update form fields fill out 


09/14/2022
Still stuck on authentication after spending many hours and days on it. This seems to be our last big blocker before we submit our project.
We were passing in a body instead of a query for parameters for the update form to actually subit, so the form was submitting but not going anywhere nor changing our data.
Got the update button to work but now the fields are no longer optional.
We were able to turn our list of donations into interactive cards.

09/15/2022
Authentication has finally been resolved with the help of Curtis. It was as simpple as creating a function and sticking it into the JSX using the useToken.
Also, have a nav to the page we're going to will carry the token along with it.
We were stuck on just typing in the URL, which did not allow the token to transfer after logging in.
Worked on some CSS stuff to make our detail page look better.
Was able to use grid to get the information to display side by side
Created tests
Just need to deploy