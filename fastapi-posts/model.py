from typing import Optional, Union
from pydantic import BaseModel, Field

class Post(BaseModel):
    id: int
    title: str
    description: str 
    requested_amount: int
    created: str

class UpdatePost(BaseModel):
    id: int
    title: Union[str, None] = None
    description: Union[str, None] = None
    requested_amount: Union[int, None] = None
