from pydantic import BaseModel


class Payment(BaseModel):
    name: str
    card_number: str
    expiration_date: str
    CVV: str
    donation_date: str


class PaymentGetAll(Payment):
    id: str
