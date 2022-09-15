from pydantic import BaseModel


class PostGetAll(BaseModel):
    id: str
    picture_url: str
    title: str
    description: str
    requested_amount: int
    created: str


class Post(BaseModel):
    title: str
    picture_url: str
    description: str
    requested_amount: int
    created: str
