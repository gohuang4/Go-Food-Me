from model import Payment

import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient("mongodb://root:password@mongo")
database = client.PaymentList
collection = database.payment


async def fetch_one_payment(id):
    document = await collection.find_one({"id": id})
    return document


async def fetch_all_payments():
    payments = []
    cursor = collection.find({})
    async for document in cursor:
        payments.append(Payment(**document))
    return payments


async def create_payment(Payment):
    document = Payment
    result = await collection.insert_one(document)
    return document


async def update_payment(id, name, card_number, expiration_date, CVV):
    await collection.update_one(
        {"id": id},
        {
            "$set": {
                "name": name,
                "card_number": card_number,
                "expiration_date": expiration_date,
                "CVV": CVV,
            }
        },
    )
    document = await collection.find_one({"id": id})
    return document


async def remove_payment(id):
    await collection.delete_one({"id": id})
    return True
