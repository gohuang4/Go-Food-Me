import { useState } from 'react'
// import React from "react-hook-form"

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
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [requested_amount, setRequestedAmount] = useState(0)
  const [created, setCreated] = useState('')
  const [isPending, setIsPending] = useState(false)
  // const [submitted,  setSubmitted] = useState(true)
  const handleSubmit= (e) => {
    e.preventDefault();
    const post = {
      "title": title, 
      "description": description, 
      "requested_amount": requested_amount, 
      "created": created,
    }

    setIsPending(true)

    const postURL = e.currentTarget.action
    const fetchConfig = {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
        'accept': 'application/json',
      },
      cache: "no-cache",
    }
    fetch(postURL, fetchConfig).then(() => {
      console.log('new post added')
      setIsPending(false)
    })
}
    return (
      <form onSubmit={handleSubmit} action="https://go-food-me-posts-api.herokuapp.com/api/post" >
      {/* <form onSubmit={handleSubmit} action="http://localhost:8200/api/post" > */}
        {/* {submitted ? <div className="success-message">Donation post created!</div>} */}
        <BootstrapInput
          id="title"
          placeholder="Title of your post"
          labelText="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
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