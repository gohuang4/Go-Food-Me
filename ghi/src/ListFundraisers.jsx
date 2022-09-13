import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import Card from "./Card.js";



function ListFundraisers() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      const url = 'http://localhost:8200/api/post';
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
  

  return (
  <>
    <div className="row">
      {post.map(p => {
        console.log(p);
        return (
          <Link to ={`/list-fundraisers/fundraisers/${p.id}`}>
            <Card
              title={p.title}
              created={p.created}
              description={p.description}
            />
          </Link>
        )
      })}
    </div>
  </>
  )
}

export default ListFundraisers