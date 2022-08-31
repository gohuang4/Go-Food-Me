from http import client
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.testclient import TestClient
from model import Payment

app = FastAPI()

from database import (
    fetch_one_payment,
    fetch_all_payments,
    create_payment,
    update_payment,
    remove_payment,
)

origins = ["https://localhost:3000"]

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


@app.post("/api/payment", response_model=Payment)
async def post_payment(payment: Payment):
    response = await create_payment(payment.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")


@app.put("/api/payment/{id}", response_model=Payment)
async def put_payment(
    id: str,
    name: str | None = None,
    card_number: str | None = None,
    expiration_date: str | None = None,
    CVV: str | None = None,
):
    get_payment = await fetch_one_payment(id)
    if name == None:
        name = get_payment["name"]
    if card_number == None:
        card_number = get_payment["card_number"]
    if expiration_date == None:
        expiration_date = get_payment["expiration_date"]
    if CVV == None:
        CVV = get_payment["CVV"]
    response = await update_payment(id, name, card_number, expiration_date, CVV)
    if response:
        return response
    raise HTTPException(404, f"There is no payment with this id.{id}")


@app.delete("/api/payment/{id}")
async def delete_payment(id: str):
    response = await remove_payment(id)
    if response:
        return "Sucessfully deleted payment"
    raise HTTPException(404, f"There is no payment with this id.{id}")


client = TestClient(app)


def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Go": "FoodMe"}
