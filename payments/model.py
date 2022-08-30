from pydantic import BaseModel

class Payment(BaseModel):
    id: str
    name: str
    card_number: str
    expiration_date: str
    CVV: str
    donation_date: str

