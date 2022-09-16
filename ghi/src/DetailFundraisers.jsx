import React, {useState, useEffect} from "react";
import { useParams, Link, Form } from "react-router-dom";


function DetailFundraisers() {
  const [post, setPost] = useState([]);
  /* eslint-disable */
  const {id} = useParams();
  /* eslint-enabled */
  
  
  useEffect(() => {
    
    async function getPost() {
      const url = process.env.REACT_APP_FastAPI_posts
      const POSTURL = url + `/api/post${id}`
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


    
  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = `/update-post/:id`; 
  //   navigate(path);
  // }
  
  // const updateData = (id) => {
  //   if (window.confirm("Are you sure you want to update?")) {

  //       fetch(`http://localhost:8200/api/post${id}`,
  //           {
  //               method: 'PUT',
  //               headers: {
  //                   'Accept': 'application/json',
  //                   'content-Type': 'application/json'
  //               },
  //               // body: JSON.stringify({
  //               //   "title": title,
  //               //   "description": description,
  //               //   "requested_amount": requested_amount,
  //               //   "created": created,
  //               // }),
  //           })

  //           .then(console.log("Updated"))
  //           .catch(err => console.log(err));
  //           window.location.reload()
  //       }
  //   };
  
  const removeData = (id) => {
    const url = process.env.REACT_APP_FastAPI_posts
    const POSTURL = url + `/api/post${id}`
    if (window.confirm("Are you sure?")) {

        fetch(POSTURL,
            {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'content-Type': 'application/json'
                }
            })

            .then(console.log("Deleted"))
            .catch(err => console.log(err));
            window.location.reload()
        }
    };
  
  // const updateData = (id) => {

  //       fetch(`http://localhost:8200/api/post${id}`,
  //           {
  //               method: 'PUT',
  //               headers: {
  //                   'Accept': 'application/json',
  //                   'content-Type': 'application/json'
  //               }
  //           })

  //           .then(console.log("Updated"))
  //           .catch(err => console.log(err));
            
        
  //   };
  
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
    <button id = {id} onClick={() => removeData(id)} className="btn btn-outline-danger">Delete</button>
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