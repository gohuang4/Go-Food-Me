## Monday August 15, 2022

Today the group came together for the first time we did quick introductions and got into ideas for the project, I had talked to Gordon early about my ideas when we group on another pair assignment the first idea was an anime recommendation site similar to a music recommendation site we had seen at the end of the last module. That was turned down as not everyone was interested in anime but my second idea was a charity food app based off Go Fund Me.
This seemed to be a big hit and we hit the ground running from there just discussing our vision of what the app could look like, all sorts of functionality it could have.

## Tuesday August 16, 2022

We worked together on creating and Excalidraw of page design, models needed, and talked about what kind of api we would need to search for to create the shopping list and enable delivery, we were going to use amazon list and see if we could limit it to food items. 

## Wednesday August 17, 2022

We discussed how we were going to handle user creation and looked into other apis we could possible use besides amazon which is when we found that Instacart api might be more suited for this application. We will have to research this more before we make final decisions but project design is going well.

## Thursday August 18, 2022

We worked more on the excalidraw for the project and discussed that we believe that using the instacart api would be the more viable route then Amazon. Still need to investigate more into the API as it is the more difficult part of the project but the rest seems like it will be more straightforward. Till we begin working on a long list of stretch goals we have.

## Friday August 19, 2022

We began shrinking down our ideas into a MVP, came up with base models for the backend to work on and decided that technologies we wanted to use for the project. We all decided that we wanted to try to implement FastAPI as we are all unfamiliar with it but believe that it will be put to good use for our site as well as provide a good challenge to us. Had a friend of mine make up a quick fun logo for our project he sent to me and the group seemed to like it. Will all be working on understanding the framework more this weekend and over the coming week. We ended the night with getting the Docker Compose file written for the project up and running so we can start with a fresh working project next week. 

## Monday August 22, 2022

We shrank our MVP down one further step to basically be a more straightforward Go fund me clone with the first stretch goal being adding the shopping list. We also after talking with Andrew discussed switching out database to MongoDB as it might be better suited for our project and based on research online, there is a tried and proven tech stack known as the FARM stack with plenty of information available. We decided to spend the day focusing on researching the integration of all these technologies together so we have a more clear outlook on how we are going to move forward with the project. Worked on wire frames for the Homepage, how it works page, fundraiser list and detail page. Before the night ended switched the docker compose file from postgres database to Mongodb. Ended the night with working skeleton to build off from.

## Tuesday August 23, 2022

We worked together on putting together the first model the Account Model for the backend. We are using FastAPI with Motor and Pydantic to setup the models and database. We had some minor hurdles figuring out how to sync the database to the database.py file but figured it out by seeing the Url in the Docker Compose file. We setup the routes and at first had only the post and get all working and we step by step saw the small little syntax errors in the terminal that were causing server errors. After going back and forth and resetting our database once after we made changes to the base model we got all the routes working. After that wanted to take a quick break and do something fun by putting the Logo on the main page of the react page. This turned into a mini trial of just finding the proper way to import the image to App.js. Turns out all we had to was find the route by going to the correct url for the image and then putting that route into the imageUrl variable.

## Wednesday August 24, 2022

We worked together and put together our other two models for payment and posts. This is when we hit our first big snag. When updating a post we would want to make some of the fields have optional so you would not have to have the original post open on other page to copy paste or anything as un-user friendly as that. We searched thru stack overflow and many different sites testing various solutions and did not find anything that solved the issue after spending quite some time on it we asked for assistance but we were unable to figure it out before the night was thru and we called it for the night to be picked up again tomorrow.

## Thursday August 25, 2022 

We were able to work out the issue with having optional data fields in our models. With a little help from a seir which sparked some inspiration in Cameron we were able to figure out the method for having our models not throw null values into our database which was causing errors. We were able to write an if statement that if the data was not being changed it would leave the previous submission rather then overwrite it with null value.

## Sunday August 28, 2022

Tried making the CI document had trouble with it after several tests will have to ask questions about it tomorrow in class. Did the React Home Page, How it Works Page, and Nav Bar first drafts since they did not require any back end integrations which we should be able to put the final touches on this week ideally. Had some trouble with some of the positioning of buttons and images but was able to sort through most of those issues by going over the documentation for bootstrap.