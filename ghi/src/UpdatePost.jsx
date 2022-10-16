import { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "./useToken";


function BootstrapInput(props) {
  const { id, placeholder, labelText, value, onChange, type } = props

  return(
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{labelText}</label>
      <input value={value} onChange={onChange} required type={type} className="form-control" id={id} placeholder={placeholder}/>
    </div>
  )
}

 function UpdateForm(_props) {
  const {id} = useParams();
  const { token } = useAuthContext();
  const url = process.env.REACT_APP_FastAPI_posts
  const PostURL = url + `/api/post/${id}`
  const [title, setTitle] = useState('')
  const [picture_url, setPictureURL] = useState('')
  const [description, setDescription] = useState('')
  const [requested_amount, setRequestedAmount] = useState(0)
  const [created, setCreated] = useState('')
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate()
  const handleSubmit= (e) => {
    e.preventDefault();
    const post = {
      "title": title,
      "picture_url": picture_url, 
      "description": description, 
      "requested_amount": requested_amount, 
      "created": created,
    }

    setIsPending(true)

    const postURL = e.currentTarget.action
    const fetchConfig = {
      method: 'PUT',
      body: JSON.stringify(post),
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        'accept': 'application/json',
      },
      cache: "no-cache",
    }
    fetch(postURL, fetchConfig).then(() => {
      setIsPending(false)
    })
    navigate(-1)
}

    return (
      <form onSubmit={handleSubmit} action={PostURL} >
        <BootstrapInput
          id="title"
          placeholder="Title of your post"
          labelText="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"/>
        <BootstrapInput
          id="picture_url"
          placeholder="Your image Url"
          labelText="Image url"
          value={picture_url}
          onChange={e => setPictureURL(e.target.value)}
          type="text"/>
        <BootstrapInput
          id="description"
          placeholder="Description of your post"
          labelText="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text"/>
        <BootstrapInput
          id="created"
          placeholder="Created"
          labelText="Created"
          value={created}
          onChange={e => setCreated(e.target.value)}
          type="text"/>
        <BootstrapInput
          id="requested_amount"
          placeholder="Donation Amount"
          labelText="Donation Goal"
          value={requested_amount}
          onChange={e => setRequestedAmount(e.target.value)}
          type="integer"/>
        { !isPending && <button 
          className='form-field'
          type='submit'>Post</button>}
        { isPending && <button disabled
          className='form-field'
          type='submit'>Posting...</button>}
      </form>
    )
}
export default UpdateForm
