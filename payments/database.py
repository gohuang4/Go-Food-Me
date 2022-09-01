from http import client
import os
import requests
import motor.motor_asyncio
from bson.objectid import ObjectId
from model import PaymentGetAll


# client = motor.motor_asyncio.AsyncIOMotorClient(
#     "mongodb://root:password@mongo"
#     )
url = f"{os.environ['DATABASE_URL']}"
client = motor.motor_asyncio.AsyncIOMotor(url)
response = requests.get(url)
database = client.PaymentList
collection = database.payment


def move_ids_around(doc):
    document = doc.copy()
    document["id"] = str(document["_id"])
    del document["_id"]
    return document


async def fetch_one_payment(id):
    o_id = ObjectId(id)
    document = await collection.find_one({"_id": o_id})
    print(document)
    return document


async def fetch_all_payments():
    payments = []
    cursor = collection.find({})
    async for document in cursor:
        doc = move_ids_around(document)
        payments.append(PaymentGetAll(**doc))
    return payments


async def create_payment(Payment):
    document = Payment
    await collection.insert_one(document)
    return document


async def update_payment(id, name, card_number, expiration_date, CVV):
    o_id = ObjectId(id)
    await collection.update_one(
        {"_id": o_id},
        {
            "$set": {
                "name": name,
                "card_number": card_number,
                "expiration_date": expiration_date,
                "CVV": CVV,
            }
        },
    )
    document = await collection.find_one({"_id": o_id})
    return document


async def remove_payment(id):
    o_id = ObjectId(id)
    await collection.delete_one({"_id": o_id})
    return True
