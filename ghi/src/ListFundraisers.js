import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';


function ListFundraisers() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      const url = 'http://localhost:8200/api/post';
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


  const navigate = useNavigate();
  const handleClick = () => navigate(`/fundraisers/63194d2dced42f71a3e4702c`);

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
              <tr key= {p.id} onClick={handleClick}>
                <td>{ p.title }</td>
                <td>{ p.created }</td>
              </tr>
            )
          })}
        </tbody>
    </table>
    </>
  )
}

export default ListFundraisers