# from fastapi.testclient import TestClient
from main import app
import pytest
from httpx import AsyncClient
# from database import fetch_all_post

# client = TestClient(app)

@pytest.mark.anyio
def test_read_root():
    async with AsyncClient(app=app, base_url="http://test") as ac:
        response = await ac.get("/")
    assert response.status_code == 200
    assert response.json() == {"Go": "FoodMe"}

def test_get_all():
    response = client.get("/api/post")
    assert response.status_code == 200
    assert response.json() == {}


# def test_invalid_post_id1():
#     response = client.get("/list-fundraisers/fundraisers/abc")
#     assert response.status_code == 404
#     assert response.json() == {'detail': 'Not Found'}


# class EmptyPostQueries:
#     post = []


# def test_get_all():
#     app.dependency_overrides[fetch_all_post] = EmptyPostQueries
#     response = client.get("/api/post")
#     assert response.status_code == 200
#     assert response.json() == {"post": []}




# def test_posts():
#     response = client.get("/list-fundraisers")
#     assert response.status_code == 200
#     assert response.json() == {"Go": "FoodMe"}


# def test_invalid_post_id1():
#     response = client.get("/list-fundraisers/fundraisers/abc")
#     assert response.status_code == 404
#     assert response.json() == {'detail': 'Not Found'}


# class EmptyPostQueries:
#     def fetch_all_post(self):
#         return []

# def test_get_all():
#     # fake_db = []
#     app.dependency_overrides[fetch_all_post] = EmptyPostQueries
#     response = client.get("/api/post")
#     assert response.status_code == 200
#     assert response.json() == {'post': []}


    

