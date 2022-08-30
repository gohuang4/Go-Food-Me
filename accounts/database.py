from model import Account, AccountIn

import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://root:password@mongo')
database = client.AccountList
collection = database.account


def move_ids_around(doc):
    document = doc.copy()
    document["id"] = str(document["_id"])
    del document["_id"]
    return document

async def fetch_all_account():
    account = []
    cursor = collection.find({})
    async for document in cursor:
        doc = move_ids_around(document)
        account.append(Account(**doc))
    return account

async def fetch_one_account(id):

    document = await collection.find_one({"id": id})
    print(document)
    # doc = move_ids_around(document)
    # print(doc)
    # return doc
    return document

async def create_account(AccountIn):
    document = AccountIn 
    result = await collection.insert_one(document)
    print(result)
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