from pydantic import BaseModel

class AccountGetAll(BaseModel):
    id: str
    name: str
    hashed_password: str
    email: str
    firstName: str
    lastName: str

class Account(BaseModel):
    name: str
    password: str
    email: str
    firstName: str
    lastName: str

