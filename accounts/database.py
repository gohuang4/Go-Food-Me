import os
import motor.motor_asyncio
from bson.objectid import ObjectId
from model import AccountGetAll

url = os.environ.get("DATABASE_URL")
client = motor.motor_asyncio.AsyncIOMotorClient(url)
database = client.AccountList
collection = database.account


class AccountsQueries:
    async def get_user_auth(self, name):
        document = await collection.find_one({"name": name})
        return document


def move_ids_around(doc):
    document = doc.copy()
    document["id"] = str(document["_id"])
    del document["_id"]
    return document


async def fetch_all_accounts():
    account = []
    cursor = collection.find({})
    async for document in cursor:
        doc = move_ids_around(document)
        account.append(AccountGetAll(**doc))
    return account


async def create_account(Account):
    document = Account
    await collection.insert_one(document)
    return document

async def remove_account(id):
    o_id = ObjectId(id)
    await collection.delete_one({"_id": o_id})
    return True
