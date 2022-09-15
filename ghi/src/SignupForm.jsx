import { useState } from 'react';

const url = process.env.REACT_APP_FastAPI_accounts
const ACCOUNT_URL = url + "/api/account"

function BootstrapInput(props) {
  const { id, placeholder, labelText, value, onChange, type } = props

  return(
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{labelText}</label>
      <input value={value} onChange={onChange} required type={type} className="form-control" id={id} placeholder={placeholder}/>
    </div>
  )
}

function SignupForm(props) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = {
      "name": name,
      "password": password,
      "email": email,
      "firstName": firstName,
      "lastName": lastName
    }

    const accountURL = e.currentTarget.action 
    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(account),
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      cache: "no-cache",
    }
    fetch(accountURL, fetchConfig).then(() => {
      console.log('new account added')
    })
  }

    return (
      <form onSubmit={handleSubmit} action={ACCOUNT_URL}>
        <BootstrapInput
          id="name"
          placeholder="Username"
          labelText="Username"
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"/>
        <BootstrapInput
          id="password"
          placeholder="Password"
          labelText="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"/>
        <BootstrapInput
          id="email"
          placeholder="Email"
          labelText="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"/>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">Sign up</button>
      </div>
      </form>
    )
}
export default SignupForm;
