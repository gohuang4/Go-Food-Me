
# week 1 8/15-8/19
## 8/15 
First day. We came to the decision pretty quickly that we'd make a Go Fund Me clone where
users would post grocery lists and someone else could pay to have them sent to whoever made the post. 

## 8/16-8/18
We discussed our project in more detail and modeled different parts of it in Excalidraw. 

## 8/19
Finally refined the ideas we'd been collecting on Excalidraw. Have a clearer idea of what MVP will look like. We decided to use FastAPI and MongoDB for our project because we thought we'd learn the most that way.

# week 2 8/22-8/25
## 8/22 
Our MVP got narrower after some advice from Andrew; now MVP will let users sign up/in/out, logged in users can make posts, and anyone can make a payment for anyone else's post. Watched/read multiple tutorials on the FARM stak (FastAPI, React, MongoDB) but don't feel like I absorbed much information.

## 8/23-8/25
Started to set up the accounts back-end. Encountered problems with making fields optional for the "put" request to edit properties of an existing account. We finally fixed the optional fields after working at it on and off for 2 days. 

# week 3 8/29-9/2
## 8/29
The problem now is figuring out unique IDs for the different objects that can be created on the site. UUID was an approach we tried but abandoned when, after a lot of time and effort, we realized that we could display something that was a UUID but that it was the same one over and over again. Decided to scrap the UUID approach after hitting that roadblock. 

## 8/30
The other unique ID approach we had available and which we ended up using was the ObjectID which is a part of MongoDB. We got it to work only after Nick figured out MongoDB Compass, because that allowed us to look at our actual data and have a much clearer understanding of what was going on. At this point we had one service which had all the features we thought that a service might need in order for us to move forward on all 3 of them, so we copied the changes from the accounts service to the payment and posts services.

## 8/31
Barebones backend finished. 

## 9/1
Started to build out React pages. Got skeleton for accounts pages finished.

## 9/2
Didn't really do much today.

# week 4 9/6-9/9
## 9/6-9/7
Spent some time learning about React hooks because before this, we had been focused entirely on our backend problems. Used that knowledge to do more work to our React pages. Figured out how to get data to go from user input in the frontend to our database.

## 9/8-9/9
The new enemy is authentication. We have people working on a few different things but Cameron and I have started to work on it, and it's hard especially alongside all these other things that are still becoming familiar.

# week 5 9/12-9/16
## 9/12-9/15
Auth struggle. Finally got it to work on 9/15. Started on unit tests.

## 9/16
Figured out unit tests at the last minute. Added sign out button.