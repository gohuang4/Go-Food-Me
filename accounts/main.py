from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from bson.objectid import ObjectId
from model import Account


app = FastAPI()


from database import (
    fetch_one_account,
    fetch_all_account,
    create_account,
    update_account,
    remove_account,
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


@app.get("/api/account")
async def get_account():
    response = await fetch_all_account()
    return response


@app.get("/api/account{_id}", response_model=Account)
async def get_account_by_id(_id: str):
    response = await fetch_one_account(_id)
    if response:
        return response
    raise HTTPException(404, f"There is no account with this id.{_id}")


@app.post("/api/account", response_model=Account)
async def post_account(account: Account):
    response = await create_account(account.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")


@app.put("/api/account{_id}", response_model=Account)
async def put_account(name: str, password: str, email: str):
    response = await update_account(name, password, email)
    if response:
        return response
    raise HTTPException(404, f"There is no account with this id.{id}")


@app.delete("/api/account{id}")
async def delete_account(id: str):
    response = await remove_account(id)
    if response:
        return "Sucessfully deleted account"
    raise HTTPException(404, f"There is no account with this id.{id}")
