from fastapi.testclient import TestClient
from main import app, delete_payment



def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Go": "FoodMe"}

async def override_dependency(id:str):
    return "Sucessfully mock data delete"

app.dependency_overrides[delete_payment] = override_dependency

client = TestClient(app)

def test_delete_post():
    response = client.delete("/api/payment/6324c248a246d6711bba0f28")
    assert response.status_code == 200
    assert response.content == b'"Sucessfully mock data delete"'

app.dependency_overrides = {}