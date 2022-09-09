from pydantic import BaseModel


class PaymentGetAll(BaseModel):
    id: str
    name: str
    card_number: str
    expiration_date: str
    CVV: str
    donation_date: str

class Payment(BaseModel):
    name: str
    card_number: str
    expiration_date: str
    CVV: str
    donation_date: str
