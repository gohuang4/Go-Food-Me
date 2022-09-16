from fastapi.testclient import TestClient
from main import app
# from database import fetch_all_post

client = TestClient(app)


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Go": "FoodMe"}

# def test_bad_id():
#     response = client.get("/api/post/123")
#     assert response.status_code == 405
#     assert response.json() == {"detail": "Method Not Allowed"}

# def test_get_todo_by_title():
#     response = client.get("/api/post")
#     assert response.status_code == 200

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


    

