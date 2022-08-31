from pydantic import BaseModel


class Post(BaseModel):
    id: str
    title: str
    description: str
    requested_amount: int
    created: str
