import React, {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";

// const DEPLOY_POST_URL = "https://go-food-me-posts-api.herokuapp.com/api/post"
// const LOCAL_POST_URL = "http://localhost:8200/api/post"




function DetailFundraisers() {
  const [post, setPost] = useState([]);
  // const [newPost, setNewPost] = useState("");
  /* eslint-disable */
  const {id} = useParams();
  /* eslint-enabled */
  
  
  useEffect(() => {
    
    async function getPost() {
      const url = process.env.REACT_APP_FastAPI_posts
      const POSTURL = url + `/api/post${id}`
      console.log(POSTURL)
      // const url = `http://localhost:8200/api/post${id}`;
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
    if (window.confirm("Are you sure?")) {

        fetch(`http://localhost:8200/api/post${id}`,
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
  

  return (
    <>
    <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Requested Amount</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {/* {post.map(p => { */}

              <tr key= {post.id}>
                <td>{ post.title }</td>
                <td>{ post.description }</td>
                <td>{ post.requested_amount}</td>
                <td>{ post.created }</td>
                <td><button id = {id} onClick={() => removeData(id)} className="btn btn-outline-danger btn-sm">Delete</button></td>
                <td><Link to={`/update-post/${id}`} className="btn btn-primary">Update</Link></td>
              </tr>
            
          {/* })} */}
        </tbody>
    </table>
    </>
  )



}

export default DetailFundraisers