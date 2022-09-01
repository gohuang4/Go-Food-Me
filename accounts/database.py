from model import AccountGetAll

from bson.objectid import ObjectId
import motor.motor_asyncio

client=motor.motor_asyncio.AsyncIOMotorClient("mongodb://root:password@mongo")
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
        account.append(AccountGetAll(**doc))
    return account


async def fetch_one_account(id):
    o_id = ObjectId(id)
    document = await collection.find_one({"_id": o_id})
    print(document)
    return document


async def create_account(Account):
    document = Account
    await collection.insert_one(document)
    return document


async def update_account(id, name=None, password=None, email=None):
    o_id = ObjectId(id)
    var = {"id": id}
    if name:
        var["name"] = name
    if password:
        var["password"] = password
    if email:
        var["email"] = email
        
    await collection.update_one({"_id": o_id}, {"$set": var})
    document = await collection.find_one({"_id": o_id})
    return document


async def remove_account(id):
    o_id = ObjectId(id)
    await collection.delete_one({"_id": o_id})
    return True
