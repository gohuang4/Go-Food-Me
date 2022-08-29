from pydantic import BaseModel

class Post(BaseModel):
    id: int
    title: str
    description: str 
    requested_amount: int
    created: str
