from fastapi.testclient import TestClient
from main import app
from database import fetch_all_payments

client = TestClient(app)

class EmptyPaymentQueries:
    def fetch_payments(self):
        return []

def test_get_all_payments():
    app.dependency_overrides[fetch_all_payments] = EmptyPaymentQueries

    response = client.get("/api/payment")

    assert response.status_code == 200
    assert response.json() == {"payment": []}