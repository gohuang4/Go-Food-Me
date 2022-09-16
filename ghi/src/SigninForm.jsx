import { useState } from 'react'
import { useToken } from './useToken'
// import login from './LoginFunction'

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
  /* eslint-disable */
async function Login(username, password) {
  // For FastAPI account services, use this one
  const url = process.env.REACT_APP_FastAPI_accounts
  const Login_URl =  url + "/token";

  const form = new FormData();
  form.append("username", username);
  form.append("password", password);

  const response = await fetch(Login_URl, {
    method: "post",
    credentials: "include",
    body: form,
  });
  if (response.ok) {
    const url = process.env.REACT_APP_FastAPI_accounts
    const Token_url =  url + "/token";  
    try {
      const response = await fetch(Token_url, {
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        console.log("signin:token-->",token)
      }
    } catch (e) {}
    return false;
  }
  let error = await response.json();
  // DO SOMETHING WITH THE ERROR, IF YOU WANT
}
function SigninForm(props) {
  // const [token, login] = useToken();
  const [token, login] = useToken();
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  
  /* eslint-enable */
  const handleSubmit = (e) => {
    e.preventDefault();
    login(name, password);
  }
  //   const account = {
  //     "name": name,
  //     "password": password,
  //     "email": email,
  //   }

  //   const accountURL = e.currentTarget.action 
  //   const fetchConfig = {
  //     method: 'POST',
  //     body: JSON.stringify(account),
  //     headers: {
  //       "Content-Type": "application/json",
  //       "accept": "application/json"
  //     },
  //     cache: "no-cache",
  //   }
  //   console.log(fetchConfig.body);
  //   fetch(accountURL, fetchConfig).then(() => {
  //     console.log('new account added')
  //   })
  // }

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
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">Sign in</button>
      </div>
      </form>
    )
}
export default SigninForm