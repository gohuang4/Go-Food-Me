from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Post


app = FastAPI()

from database import (
    fetch_one_post,
    fetch_all_post,
    create_post,
    update_post,
    remove_post,
)

origins = ["https://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"Go": "FoodMe"}


@app.get("/api/post")
async def get_post():
    response = await fetch_all_post()
    return response


@app.get("/api/post{id}", response_model=Post)
async def get_post_by_id(id: str):
    response = await fetch_one_post(id)
    if response:
        return response
    raise HTTPException(404, f"There is no post with this id.{id}")


@app.post("/api/post", response_model=Post)
async def post_post(post: Post):
    response = await create_post(post.dict())
    if response:
        return response
    raise HTTPException(400, f"Something went wrong / Bad Request")


@app.put("/api/post{id}", response_model=Post)
async def put_post(
    id: str,
    title: str | None = None,
    description: str | None = None,
    requested_amount: int | None = None,
):
    response = await update_post(
        id=id, title=title, description=description, requested_amount=requested_amount
    )
    if response:
        return response
    raise HTTPException(404, f"There is no post with this id.{id}")


@app.delete("/api/post{id}")
async def delete_post(id: str):
    response = await remove_post(id)
    if response:
        return "Sucessfully deleted post"
    raise HTTPException(404, f"There is no post with this id.{id}")