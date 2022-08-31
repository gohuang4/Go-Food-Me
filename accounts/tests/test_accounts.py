from fastapi.testclient import TestClient
from main import app
from database import fetch_all_account

client = TestClient(app)

# class EmptyAccountQueries:
#     def fetch_all_account(self):
#         return []

# def test_get_all_accounts():
#     app.dependency_overrides[fetch_all_account] = EmptyAccountQueries

#     response = client.get("/api/post")

#     assert response.status_code == 200
#     assert response.json() == {"account": []}

def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == { "Go" : "FoodMe"}