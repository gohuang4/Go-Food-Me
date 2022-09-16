from fastapi.testclient import TestClient
from main import app, delete_payment

client = TestClient(app)


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Go": "FoodMe"}

async def override_dependency(id:str):
    return "Sucessfully deleted payment"

app.dependency_overrides[delete_payment] = override_dependency

def test_delete_post():
    response = client.delete("/api/payments/1/")
    assert response.status_code == 200
    assert response == "Sucessfully deleted payment"

app.dependency_overrides = {}