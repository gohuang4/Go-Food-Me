import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import Card from "./Card.jsx";


function ListFundraisers() {
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    async function getPost() {
      const url = process.env.REACT_APP_FastAPI_posts
      const POSTURL = url + "/api/post"
      const response = await fetch(POSTURL);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
      } else {
        console.log("Response failed")
      }
    }
    getPost();
  }, [setPost] );

  return (
  <>
    <div className="row">
      {post.map(p => {
        console.log(p);
        return (
          <div className="col">
            <Link to ={`/list-fundraisers/fundraisers/${p.id}`}>
              <Card
                title={p.title}
                created={p.created}
                description={p.description}
              />
            </Link>
          </div>
        )
      })}
    </div>
  </>
  )
}

export default ListFundraisers