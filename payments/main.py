import os
from model import Payment, PaymentGetAll
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, HTTPException
from database import (
    fetch_one_payment,
    fetch_all_payments,
    create_payment,
    update_payment,
    remove_payment,
)

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:8100",
    os.environ.get("CORS_HOST", None),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Go": "FoodMe"}


@app.get("/api/payment")
async def get_payment():
    response = await fetch_all_payments()
    return response


@app.get("/api/payment/{id}", response_model=Payment)
async def get_payment_by_id(id: str):
    response = await fetch_one_payment(id)
    if response:
        return response
    raise HTTPException(404, f"There is no payment with this id.{id}")


@app.post("/api/payment", response_model=PaymentGetAll)
async def post_payment(payment: Payment):
    response = await create_payment(payment.dict())
    newdict = {
        "id": str(response["_id"]),
        "name": response["name"],
        "card_number": response["card_number"],
        "expiration_date": response["expiration_date"],
        "CVV": response["CVV"],
        "donation_date": response["donation_date"]
    }
    if response:
        return newdict
    raise HTTPException(400, "Something went wrong / Bad Request")


@app.put("/api/payment/{id}", response_model=Payment)
async def put_payment(
    id: str,
    name: str | None = None,
    card_number: str | None = None,
    expiration_date: str | None = None,
    CVV: str | None = None,
):
    get_payment = await fetch_one_payment(id)
    if name is None:
        name = get_payment["name"]
    if card_number is None:
        card_number = get_payment["card_number"]
    if expiration_date is None:
        expiration_date = get_payment["expiration_date"]
    if CVV is None:
        CVV = get_payment["CVV"]
    response = await update_payment(
        id, name, card_number,
        expiration_date, CVV
        )
    if response:
        return response
    raise HTTPException(404, f"There is no payment with this id.{id}")


@app.delete("/api/payment/{id}")
async def delete_payment(id: str):
    response = await remove_payment(id)
    if response:
        return "Sucessfully deleted payment"
    raise HTTPException(404, f"There is no payment with this id.{id}")
