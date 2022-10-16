import os
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from typing import Optional
from model import Account, AccountGetAll
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
import authentication
from passlib.context import CryptContext
from database import (
    fetch_all_accounts,
    create_account,
    remove_account,
)

SIGNING_KEY = os.environ["SIGNING_KEY"]
ALGORITHM = "HS256"
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)


async def get_current_user(
    token: Optional[str] = Depends(oauth2_scheme),
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        return jwt.decode(token, SIGNING_KEY, algorithms=[ALGORITHM])
    except (JWTError, AttributeError):
        raise credentials_exception


app = FastAPI()
app.include_router(authentication.router)

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

origins = [
    "http://localhost:3000",
    "http://localhost:8000",
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
def read_root(user_info=Depends(get_current_user)):
    return {"Go": "FoodMe"}


@app.get("/api/account")
async def get_accounts():
    response = await fetch_all_accounts()
    return response


@app.post("/api/account", response_model=AccountGetAll)
async def post_account(account: Account):

    hashdict = account.dict()
    hashdict["hashed_password"] = pwd_context.hash(hashdict["password"])
    hashdict.pop("password")



    response = await create_account(hashdict)
    newdict = {
        "id": str(response["_id"]),
        "name": response["name"],
        "hashed_password": response["hashed_password"],
        "email": response["email"],
        "firstName": response["firstName"],
        "lastName": response["lastName"],
    }
    if response:
        return newdict
    raise HTTPException(400, "Something went wrong / Bad Request")


@app.delete("/api/account/{id}")
async def delete_account(id: str):
    response = await remove_account(id)
    if response:
        return "Sucessfully deleted account"
    raise HTTPException(404, f"There is no account with this id.{id}")
