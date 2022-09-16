from fastapi.testclient import TestClient
from main import app
from database import fetch_all_post

client = TestClient(app)


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Go": "FoodMe"}


# def test_invalid_post_id1():
#     response = client.get("/list-fundraisers/fundraisers/abc")
#     assert response.status_code == 404
#     assert response.json() == {'detail': 'Not Found'}


class EmptyPostQueries:
    post = []


def test_get_all():
    app.dependency_overrides[fetch_all_post] = EmptyPostQueries
    response = client.get("/api/post")
    assert response.status_code == 200
    assert response.json() == {"post": []}
