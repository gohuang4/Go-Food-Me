from pydantic import BaseModel, Field

class Post(BaseModel):
    id: int
    title: str
    description: str 
    requested_amount: int
    created: str
