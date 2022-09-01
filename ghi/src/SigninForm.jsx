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

function SigninForm(props) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

    return (
      <form>
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
          type="integer"/>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">Sign in</button>
      </div>
      </form>
    )
}
export default SigninForm