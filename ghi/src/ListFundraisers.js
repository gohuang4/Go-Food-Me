import React from "react";



class ListFundraisers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        title: '',
        description: '',
        requested_amount: '',
        created: '',
        post: [],
    
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8200/api/post/');
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      this.setState({post: data.post});
    }
  }


  render() {

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
            {this.state.post.map(p => {
              console.log(p);
              return (
                <tr key={p.id}>
                  <td>{ p.title }</td>
                  <td>{ p.description }</td>
                  <td>{ p.requested_amount}</td>
                  <td>{ p.created }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    )
  }
}


export default ListFundraisers


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

 