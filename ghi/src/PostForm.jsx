import { useState } from 'react'
import { useAuthContext } from "./useToken";


const url = process.env.REACT_APP_FastAPI_posts
const PostURL = url + "/api/post"

function BootstrapInput(props) {
  const { id, placeholder, labelText, value, onChange, type } = props

  return(
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{labelText}</label>
      <input value={value} onChange={onChange} required type={type} className="form-control" id={id} placeholder={placeholder}/>
    </div>
  )
}

function PostForm(props) {
  const { token } = useAuthContext();
  // console.log(token);
  const [title, setTitle] = useState('')
  const [picture_url, setPictureURL] = useState('')
  const [description, setDescription] = useState('')
  const [requested_amount, setRequestedAmount] = useState(0)
  const [created, setCreated] = useState('')
  const [isPending, setIsPending] = useState(false)
  // const [submitted,  setSubmitted] = useState(true)
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

    const postURL = e.currentTarget.action;
    const postFetchConfig = {
      // credentials: "include",
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        'accept': 'application/json',
      },
      cache: "no-cache",
    }
    console.log('headers', postFetchConfig.headers);
    fetch(postURL, postFetchConfig).then(() => {
      console.log('new post added')
      setIsPending(false)
    })
}

    return (
      <form onSubmit={handleSubmit} action={PostURL} >
        {/* {submitted ? <div className="success-message">Donation post created!</div>} */}
        <BootstrapInput
          id="title"
          placeholder="Title of your post"
          labelText="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"/>
        <BootstrapInput
          id="picture_url"
          placeholder="Your image url"
          labelText="Image Url"
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
          labelText="Ceated"
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
export default PostForm