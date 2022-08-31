from pydantic import BaseModel

class PostGetAll(BaseModel):
    id: str
    title: str
    description: str 
    requested_amount: int
    created: str

class Post(BaseModel):
    title: str
    description: str 
    requested_amount: int
    created: str
