from pydantic import BaseModel


class Post(BaseModel):
    title: str
    picture_url: str
    description: str
    requested_amount: int
    created: str


class PostGetAll(Post):
    id: str
