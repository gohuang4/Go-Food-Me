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
  const [donation_date, setDonationDate] = useState('')
  const [isPending, setIsPending] = useState(false)
  const handleSubmit= (e) => {
    e.preventDefault();
    const payment = {
      "name": name,
      "card_number": card_number,
      "expiration_date": expiration_date,
      "CVV": CVV,
      "donation_date": donation_date,
    }

    setIsPending(true)

    const paymentURL = e.currentTarget.action
    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(payment),
      headers: {
        "Content-Type": "application/json",
        'accept': 'application/json',
      },
      cache: "no-cache",
    }
    fetch(paymentURL, fetchConfig).then(() => {
      console.log('new payment added')
      setIsPending(false)
    })

  }

    return (
      <form onSubmit={handleSubmit} action="http://localhost:8100/api/payment">
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
        <BootstrapInput
          id="donation_date"
          placeholder="mm/dd/yyyy"
          labelText="Date of Donation"
          value={donation_date}
          onChange={e => setDonationDate(e.target.value)}
          type="text"/>
        { !isPending && <button 
          className='form-field'
          type='submit'>Submit</button>}
        { isPending && <button disabled
          className='form-field'
          type='submit'>Submitting...</button>}
      </form>
    )
}
export default PaymentForm