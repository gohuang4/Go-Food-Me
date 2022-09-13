import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

// const split_url = document.URL.split("/")
// const id = split_url[split_url.length - 1]

function DetailFundraisers() {
  const [post, setPost] = useState([]);
  // const [newPost, setNewPost] = useState("");
  /* eslint-disable */
  const {id} = useParams();
  /* eslint-enabled */
  
  
  useEffect(() => {
    
    async function getPost() {
      const url = `http://localhost:8200/api/post${id}`;
      const response = await fetch(url);
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
                <td><button id = {id} onClick={() => updateData(id)} className="btn btn-outline-info btn-sm">Update</button></td>
                <td><button id = {id} onClick={() => removeData(id)} className="btn btn-outline-danger btn-sm">Delete</button></td>
              </tr>
            
          {/* })} */}
        </tbody>
    </table>
    </>
  )



}

export default DetailFundraisers