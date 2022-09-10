import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';


function ListFundraisers() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      const url = 'https://go-food-me-posts-api.herokuapp.com/api/post';
      console.log(url)
      const response = await fetch(url);
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
        console.log(data);
      } else {
        console.log("Response failed")
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
            console.log(p);
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