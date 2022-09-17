from fastapi.testclient import TestClient
from main import app, delete_post
from typing import Union
from fastapi import Depends, FastAPI

# from database import fetch_all_post

client = TestClient(app)


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Go": "FoodMe"}

async def override_dependency(id:str, user_info):
    return "Sucessfully deleted post"

app.dependency_overrides[delete_post] = override_dependency

def test_delete_post():
    response = client.delete("/api/post/1")
    assert response.status_code == 200
    assert response == "Sucessfully deleted post"

app.dependency_overrides = {}