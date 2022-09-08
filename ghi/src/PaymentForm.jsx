import { useState } from 'react'

function BootstrapInput(props) {
  const { id, placeholder, labelText, value, onChange, type } = props

  return(
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{labelText}</label>
      <input value={value} onChange={onChange} required type={type} className="form-control" id={id} placeholder={placeholder}/>
    </div>
  )
}

function PaymentForm(props) {
  const [name, setName] = useState('')
  const [card_number, setCardNumber] = useState('')
  const [expiration_date, setExpirationDate] = useState('')
  const [CVV, setCVV] = useState('')

    return (
      <form>
        <BootstrapInput
          id="name"
          placeholder="Name on card"
          labelText="Name"
          className="spinner-border text-primary"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"/>
        <BootstrapInput
          id="card_number"
          placeholder="0123 4567 8901 2345"
          labelText="Credit card number"
          value={card_number}
          onChange={e => setCardNumber(e.target.value)}
          type="text"/>
        <BootstrapInput
          id="expiration_date"
          placeholder="mm/yyyy"
          labelText="Expiration"
          value={expiration_date}
          onChange={e => setExpirationDate(e.target.value)}
          type="text"/>
        <BootstrapInput
          id="CVV"
          placeholder="000"
          labelText="CVV"
          value={CVV}
          onChange={e => setCVV(e.target.value)}
          type="password"/>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">Submit</button>
      </div>
      </form>
    )
}
export default PaymentForm