from model import Post

import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://root:password@mongo')
database = client.PostList
collection = database.post

async def fetch_one_post(id):
    document = await collection.find_one({"id": id})
    return document

async def fetch_all_post():
    post = []
    cursor = collection.find({})
    async for document in cursor:
        post.append(Post(**document))
    return post

async def create_post(Post):
    document = Post 
    result = await collection.insert_one(document)
    return document

async def update_post(id, title, description, requested_amount):
    await collection.update_one({"id": id}, {"$set":{
        "title": title, 
        "description": description, 
        "requested_amount": requested_amount,
    }})
    document = await collection.find_one({"id":id})
    return document

async def remove_post(id):
    await collection.delete_one({"id":id})
    return True