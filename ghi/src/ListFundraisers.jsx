import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import Card from "./Card.js";

// const DEPLOY_POST_URL = "https://go-food-me-posts-api.herokuapp.com/api/posts"
// const LOCAL_POST_URL = "http://localhost:8200/api/post"


function ListFundraisers() {
  const [post, setPost] = useState([]);
  
  useEffect(() => {
    async function getPost() {
      // const url = {DEPLOY_POST_URL};
      const url = process.env.REACT_APP_FastAPI_posts
      const POSTURL = url + "/api/post"
      console.log(POSTURL)
      const response = await fetch(POSTURL);
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