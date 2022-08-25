## 8/25 Thursday
Found how to make parameters optional, and if the data was not filled out, then it would not push anything new to the database. The code I came up with was

async def put_payment(id: int, name: str, card_number: str, expiration_date: str, CVV: str | None = None):
    get_payment = await fetch_one_payment(id)
    if CVV == None:
        CVV = get_payment["CVV"]
    response = await update_payment(id, name, card_number, expiration_date, CVV)
    if response:
        return response
    raise HTTPException(404, f"There is no payment with this id.{id}")

CVV is the optional data. In the arguments, there is a union where if the user doesnt fill out the optional data field, then it defaults to None. The var "get_payment" just uses the id from the arguments and collects the data associated with that id. The if statement says that if the CVV field was left blank, thus defaulting to None, then change the CVV argument to be what it is currently in the database. Then it proceeds to push the data to the database in the var "response". Booyeah!