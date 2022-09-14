import { useState } from 'react';

const url = process.env.REACT_APP_FASTAPI_accounts
const ACCOUNT_URL = url + "/api/account"
console.log(ACCOUNT_URL)
// const DEPLOY_ACCOUNT_URL = 'https://go-food-me-accounts-api.herokuapp.com/api/account'
// const LOCAL_ACCOUNT_URL = 'http://localhost:8000/api/account'

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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = {
      "name": name,
      "password": password,
      "email": email,
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
    console.log(fetchConfig.body);
    fetch(accountURL, fetchConfig).then(() => {
      console.log('new account added')
    })
  }

    return (
      <form onSubmit={handleSubmit} action={ACCOUNT_URL}>
      {/* <form onSubmit={handleSubmit} action={LOCAL_ACCOUNT_URL}> */}
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
