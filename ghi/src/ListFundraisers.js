import React, {useState, useEffect} from "react";

function ListFundraisers() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getPost() {
      const url = 'http://localhost:8200/api/post';
      const response = fetch(url);
      if (response.ok) {
        const data = await response.json();
        setPost(data);
        console.log(data);
      }
    }
    getPost();
  }, [setPost] );

  // console.log(post);

  return (
    
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
          {post.map(p => {
            console.log(p);
            return (
              <tr key= {p.id.value}>
                <td>{ p.title }</td>
                <td>{ p.description }</td>
                <td>{ p.requested_amount}</td>
                <td>{ p.created }</td>
              </tr>
            )
          })}
        </tbody>
    </table>
  )
}

export default ListFundraisers

// class ListFundraisers extends React.Component {
  
  


//   constructor(props) {
//     super(props)
//     this.state = {
//         title: '',
//         description: '',
//         requested_amount: '',
//         created: '',
//         post: [],
    
//     }
//   }

//   async componentDidMount() {
//     const response = await fetch('http://localhost:8200/api/post/');
//     if (response.ok) {
//       const data = await response.json();
//       this.setState({post: data.post});
//       console.log("API Response received",data)
//     } else {
//       console.log("API call failed")
//     }
//   }




//   render() {
    // const [items, setItems] = useState();

    // useEffect(() => {
    //   getItems().then(data => setItems(data));
    // }, []);

    // let itemsToRender;
    // if (items) {
    //   itemsToRender = items.map(item => {
    //     return <div key={item.id}>{item.title}</div>;
    //   });
    // } else {
    //   itemsToRender = "Loading..."
    // }
//     return (
    
//       <table className="table table-striped">
//           <thead>
//             <tr>
//               <th>Title</th>
//               <th>Description</th>
//               <th>Requested Amount</th>
//               <th>Created</th>
//             </tr>
//           </thead>
//           <tbody>
//             {post.map(p => {
//               console.log(p);
//               return (
//                 <tr key= {p.id}>
//                   <td>{ p.title }</td>
//                   <td>{ p.description }</td>
//                   <td>{ p.requested_amount}</td>
//                   <td>{ p.created }</td>
//                 </tr>
//               )
//             })}
//           </tbody>
//       </table>
//     )
//   }
// }


// export default ListFundraisers


// function MyComponent(props) {
//     const [things, setThings] = useState([]);
//     const [error, setError] = useState('');
  
//     useEffect(() => {
//       async getData() {
//         const url = `https://localhost:8200/api/post/`;
//         const response = await fetch(url);
//         if (response.ok) {
//           const data = await response.json();
//           setThings(data);
//         } else {
//           setError('Could not load the things');
//         }
//       }
//     }, [setThings, setError])
  
    /* MORE CODE HERE */
//   }


// class ListFundraisers extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//         id: '',
//         title: '',
//         description: '',
//         requested_amount: '',
//         created: '',
//         post: [],
    
//     }
//   }

 