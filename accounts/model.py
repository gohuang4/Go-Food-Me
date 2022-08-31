from pydantic import BaseModel


class Account(BaseModel):
    id: str
    name: str
    password: str
    email: str
