import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

// const DEPLOY_POST_URL = "https://go-food-me-posts-api.herokuapp.com/api/posts"
// const LOCAL_POST_URL = "http://localhost:8200/api/post"

function ListFundraisers() {
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    async function getPost() {
      // const url = {DEPLOY_POST_URL};
      const url = process.env.REACT_APP_FastAPI_posts
      const POSTURL = url + "/api/post"
      // console.log(POSTURL)
      const response = await fetch(POSTURL);
      // console.log(response);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
        // console.log(data);
      } else {
        // console.log("Response failed")
      }
    }
    getPost();
  }, [setPost] );
 

  
  // const navigate = useNavigate();
  // const handleClick = (id) => navigate(`/fundraisers/631a9d2b3a662e8e685b8328`);

  return (
  <>
    <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {post.map(p => {
            // console.log(p);
            return (
              <tr key= {p.id}>
                <td>{ p.title }</td>
                <td>{ p.created }</td>
                <td>
                  <Link to={`/list-fundraisers/fundraisers/${p.id}`}>Detail</Link>
                </td>
              </tr>
            )
          })}
        </tbody>
    </table>
  </>
  )
}

export default ListFundraisers