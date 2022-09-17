import os
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer
from fastapi import FastAPI, HTTPException, Depends, status

from jose import JWTError, jwt
# from jose import JWTError, jwt
from typing import Optional
from model import Post, PostGetAll
from database import (
    fetch_one_post,
    fetch_all_post,
    create_post,
    update_post,
    remove_post,
)

SIGNING_KEY = os.environ["SIGNING_KEY"]
ALGORITHM = "HS256"
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token", auto_error=False)


async def get_current_user(
    fastapi_access_token: Optional[str] = Depends(oauth2_scheme),
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        decodedToken = jwt.decode(
            fastapi_access_token, SIGNING_KEY, algorithms=[ALGORITHM]
        )
        return decodedToken
        
    except (JWTError, AttributeError):
        raise credentials_exception


app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:8200",
    os.environ.get("CORS_HOST", None),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def read_root():
    return {"Go": "FoodMe"}


@app.get("/api/post")
async def get_post():
    response = await fetch_all_post()
    return response


@app.get("/api/post/{id}", response_model=Post)
async def get_post_by_id(id: str):
    response = await fetch_one_post(id)
    if response:
        return response
    raise HTTPException("Not Found")


# @app.post("/api/post", response_model=Post)
@app.post("/api/post", response_model=PostGetAll)
async def post_post(post: Post, user_info=Depends(get_current_user)):
    response = await create_post(post.dict())
    newdict = {
        "id": str(response["_id"]),
        "picture_url": str(response["picture_url"]),
        "title": response["title"],
        "description": response["description"],
        "requested_amount": response["requested_amount"],
        "created": response["created"],
    }
    if response:
        return newdict
    raise HTTPException(400, "Something went wrong / Bad Request")


@app.put("/api/post/{id}", response_model=Post)
async def put_post(
    id: str,
    post: Post,
    user_info=Depends(get_current_user)
    # id: str,
    # picture_url: str | None = None,
    # title: str | None = None,
    # description: str | None = None,
    # requested_amount: int | None = None,
):

    response = await update_post(
        id=id,
        picture_url=post.picture_url,
        title=post.title,
        description=post.description,
        requested_amount=post.requested_amount,
    )
    if response:
        return response
    raise HTTPException(404, f"There is no post with this id.{id}")


@app.delete("/api/post/{id}")
async def delete_post(id: str, user_info=Depends(get_current_user)):
    response = await remove_post(id)
    if response:
        return "Sucessfully deleted post"
    raise HTTPException(404, f"There is no post with this id.{id}")
