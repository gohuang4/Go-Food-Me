from fastapi.testclient import TestClient
from main import app
import json
import pytest
# from database import fetch_all_post

# client = TestClient(app)


def test_read_main():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Go": "FoodMe"}

@pytest.fixture(scope="function")
def app() -> Generator[FastAPI, Any, None]:
    """
    Create a fresh database on each test case.
    """
    Base.metadata.create_all(engine)  # Create the tables.
    _app = start_application()
    yield _app
    Base.metadata.drop_all(engine)


@pytest.fixture(scope="function")
def db_session(app: FastAPI) -> Generator[SessionTesting, Any, None]:
    connection = engine.connect()
    transaction = connection.begin()
    session = SessionTesting(bind=connection)
    yield session  # use the session in tests.
    session.close()
    transaction.rollback()
    connection.close()


@pytest.fixture(scope="function")
def client(
    app: FastAPI, db_session: SessionTesting
) -> Generator[TestClient, Any, None]:
    """
    Create a new FastAPI TestClient that uses the `db_session` fixture to override
    the `get_db` dependency that is injected into routes.
    """

    def _get_test_db():
        try:
            yield db_session
        finally:
            pass

    app.dependency_overrides[get_db] = _get_test_db
    with TestClient(app) as client:
        yield client

def test_create_user(client):
    data = {"id":"6323678424e973e93b226bbd","title": "test","picture_url": "test","description": "test", "requested_amount": 100}
    response = client.post("/post",json.dumps(data))
    assert response.status_code == 200 
    assert response.json()["title"] == "test"

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


# class EmptyPostQueries:
#     post = []


# def test_get_all():
#     app.dependency_overrides(fetch_all_post: EmptyPostQueries)
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


    

