FROM python:3.10-bullseye
RUN python -m pip install --upgrade pip
WORKDIR /app

COPY requirements.txt requirements.txt
COPY main.py main.py
COPY model.py model.py
COPY database.py database.py
COPY authentication.py authentication.py 

RUN pip install -r requirements.txt
CMD uvicorn main:app --reload --host 0.0.0.0 --port $PORT