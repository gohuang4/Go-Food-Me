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

## 8/25 Thursday
Found how to make parameters optional, and if the data was not filled out, then it would not push anything new to the database. The code I came up with was

async def put_payment(id: int, name: str, card_number: str, expiration_date: str, CVV: str | None = None):
    get_payment = await fetch_one_payment(id)
    if CVV == None:
        CVV = get_payment["CVV"]
    response = await update_payment(id, name, card_number, expiration_date, CVV)
    if response:
        return response
    raise HTTPException(404, f"There is no payment with this id.{id}")

CVV is the optional data. In the arguments, there is a union where if the user doesnt fill out the optional data field, then it defaults to None. The var "get_payment" just uses the id from the arguments and collects the data associated with that id. The if statement says that if the CVV field was left blank, thus defaulting to None, then change the CVV argument to be what it is currently in the database. Then it proceeds to push the data to the database in the var "response". Booyeah!

## Sunday August 28, 2022

Tried making the CI document had trouble with it after several tests will have to ask questions about it tomorrow in class. Did the React Home Page, How it Works Page, and Nav Bar first drafts since they did not require any back end integrations which we should be able to put the final touches on this week ideally. Had some trouble with some of the positioning of buttons and images but was able to sort through most of those issues by going over the documentation for bootstrap.

## Monday August 29, 2022

Was a rough day we thought that we had made headway with the UUID replacing _id for our unique field for MongoDB. After figuring out how to get UUID to show we thought we had been successful then after testing it more we noticed that it was just replicating the same long string id. We are stalled on the back-end which is a bit frustrating and just trying solution after solution with not much headway. Did not resolve CI as spent the day trying to get the MongoDB issues resolved. Hopefully after meeting with instructors we will have a more solid direction on how to overcome our issues. In the meanwhile just incase I spent the later end of the night setting up the docker compose for the project setup through Django though I really hope we do not have to use it.

## Tuesday August 30, 2022

We had a good day after a rough start and a push in the right direction from our instructor. We were able to figure out how to select the Account by the ObjectId. We were able to do this with a half a dozen print statements and finally getting MongoDB Compass. With ObjectId glaring us in the face in our database realized that we had to assign the id value to the Object id. Tomorrow morning we will make some edits to our put method to ensure that it works and edit the other two services to match accounts.

## Wednesday August 31, 2022

Big win we got our backend up and running on all services and I got the Continuous Integration functioning. It was a long night of cleaning up the files that black couldn't fix but after a lot of trial and error got the double check marks on the ci pipeline. After ensuring all the backends were working with manual testing everyone decided to take the rest of the day to begin doing some research on react so they could start fresh on that in the morning.

## Thursday September 1, 2022

We had another good day everyone started working on their react pages. With our backend set we are in good spirits and full steam ahead. Had some issues with environment variables spent a long amount of time but did finally get them to work. Just needed to add .get to the os.environ (os.environ.get('DATABASE_URL')) and it worked! Now I can get back to focusing on the continuous deployment. Will aim to get it done tomorrow if not Saturday.

## Friday September 3, 2022

Started trying to fix the continuous deployment but not much work was done due to limited time and mandatory fun.

## Saturday September 4, 2022 

Got the continuous deployment page to deploy successfully. It was a long day of searching for a couple of obvious issues that I resolved quickly but then one silly lack of _api at the end of the heroku pages derailed me for several hours as i tried so many different solutions to try and get the cd pipeline to work but got there and did victory dance. Images did not render which does make the home button not functional but will look into that more tomorrow.

## Tuesday September 6, 2022 

After working with Andrew was able to come up with a strange brute force to have the images show up on the hosted version of our site on gitlab by adding the publicURL to the image for some reason we could just not get a basic import to work. Starting to feel the pressure to get the MVP done. Had a lot of issues with my internet today due to a storm but hopefully will be on track to get work done tomorrow.

## Wednesday September 7, 2022

After a long session of us working with Andrew and Daniel we got our Fundraiser submit form to work. The issue was that we were not feeding the id value to the front end which although we were not using it needed to send it since it is in the model. Afterwards took a look at Howard's Fundraiser List page and fixed a few bugs but missed a missing "await" luckily with some fresh eyes from Kieran he noticed it and we got two pages done today.

## Thursday September 8, 2022

We had another good day working on the front end. We got our list page to link over to the detail page. Setup the detail page and added a delete button to the page. We had some issues with the id yet again it is certainly the bane of this project. With that we have most of basic functionality setup we would now just need to get authentication setup and work on ensuring everything works when deployed which is currently and issue that endpoints don't function on the deployed site.

## Friday September 9, 2022

Having a rough time figuring out deployment issues. Worked with Neil for awhile to see if we could figure out the issues but keep getting cors issues that it appears as if they are unable to see the endpoints on the deployment site. The rest of the team is working on deployment issues.

## Monday September 12, 2022

Been struggling reconfiguring environmental variables on the front end to allow for the local and development api endpoints to work simultaneously without manual switching have tried a few different ways but cant find much documentation to go off of so really just plug and playing a lot of things.

## Tuesday September 13, 2022

Worked with a few seirs but when Andrew helped me out today figured out the way to solve the environment issues took a bit to reconfigure but have it working entirely for posts though strangely at the end of the night now have it working locally but on the deployed site getting a CORS 503 error. Will have to come back to this tomorrow morning
## 8/25 Thursday
Found how to make parameters optional, and if the data was not filled out, then it would not push anything new to the database. The code I came up with was

async def put_payment(id: int, name: str, card_number: str, expiration_date: str, CVV: str | None = None):
    get_payment = await fetch_one_payment(id)
    if CVV == None:
        CVV = get_payment["CVV"]
    response = await update_payment(id, name, card_number, expiration_date, CVV)
    if response:
        return response
    raise HTTPException(404, f"There is no payment with this id.{id}")

CVV is the optional data. In the arguments, there is a union where if the user doesnt fill out the optional data field, then it defaults to None. The var "get_payment" just uses the id from the arguments and collects the data associated with that id. The if statement says that if the CVV field was left blank, thus defaulting to None, then change the CVV argument to be what it is currently in the database. Then it proceeds to push the data to the database in the var "response". Booyeah!