from pydantic import BaseModel


class Account(BaseModel):
    id: str 
    name: str
    password: str
    email: str


class AccountIn(BaseModel):
    name: str
    password: str
    email: str