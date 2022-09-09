import React, {useState, useEffect} from "react";

function DetailFundraisers() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const split_url = document.URL.split("/")
    const id = split_url[split_url.length - 1]
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
              </tr>
            
          {/* })} */}
        </tbody>
    </table>
    </>
  )



}

export default DetailFundraisers