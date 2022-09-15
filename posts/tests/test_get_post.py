from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_posts():
    response = client.get("/list-fundraisers")
    assert response.status_code == 200
    assert response.json() == {"Go": "FoodMe"}


def test_invalid_post_id1():
    response = client.get("/list-fundraisers/fundraisers/${id}")
    assert response.status_code == 404
    assert response.json() == {'detail': 'id not found'}