from model import Account

import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://root:password@mongo')
database = client.AccountList
collection = database.account

async def fetch_one_account(id):
    document = await collection.find_one({"id": id})
    return document

async def fetch_all_account():
    account = []
    cursor = collection.find({})
    async for document in cursor:
        account.append(Account(**document))
    return account

async def create_account(Account):
    document = Account 
    result = await collection.insert_one(document)
    return document

async def update_account(id, name, password, email):
    await collection.update_one({"id": id}, {"$set":{
        "name": name, "password": password, "email": email 
    }})
    document = await collection.find_one({"id":id})
    return document

async def remove_account(id):
    await collection.delete_one({"id":id})
    return True