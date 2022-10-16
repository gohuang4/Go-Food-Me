import React, {useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useAuthContext } from "./useToken";


function DetailFundraisers() {
  const [post, setPost] = useState([]);
  const {id} = useParams();
  const { token } = useAuthContext();
  
  useEffect(() => {
    
    async function getPost() {
      const url = process.env.REACT_APP_FastAPI_posts
      const POSTURL = url + `/api/post/${id}`
      const response = await fetch(POSTURL);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
        console.log(data);
      } else {
        console.log("response failed")
      }
      
    }
    getPost();
  }, [setPost] );

  function handleSubmit(e){
    e.preventDefault();
    console.log("you clicked delete")
    removeData(e.target.id)
  }
      
  const removeData = (id) => {
    console.log("token",token)
    const url = process.env.REACT_APP_FastAPI_posts
    const POSTURL = url + `/api/post/${id}`
    if (window.confirm("Are you sure?")) {

        fetch(POSTURL,
            {
                method: 'DELETE',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    'Accept': 'application/json',
                    'content-Type': 'application/json'
                }
            })

            .then(console.log("Deleted"))
            .catch(err => console.log(err));
            window.location.reload()
        }
    };

  
  return (
    <>
    <div className="container">
    <div className="row">
    <div className="m-4 col-sm">
    <div className="image">
    <img src={post.picture_url} width="400"/>
    </div>
    </div>
    <div className="m-4 col-sm">
      <h1>{post.title}</h1>
      <h3>{post.created}</h3>
      <h3>{post.requested_amount}</h3>
      <h4>{post.description}</h4>
    </div>
    <div className="m-4 col-sm">
    <div className="m-2">
    <Link to={`/update-post/${id}`} className="btn btn-outline-primary">Update Fundraiser</Link>
    </div>
    <div className="m-2">
    <Link to={`/payment-form`} className="btn btn-outline-success">Donate to Fundraiser</Link>
    </div>
    <div className="m-2">
    <button id = {id} onClick={handleSubmit} className="btn btn-outline-danger">Delete</button>
    </div>
    </div>
    </div>
    </div>
      

    <div className="buttons">
    <div className="m-2 p-2">
    </div>
    <div className="m-2 p-2">
    </div>
    <div className="m-2 p-2">
    </div>
    </div>
    </>
  )



}

export default DetailFundraisers