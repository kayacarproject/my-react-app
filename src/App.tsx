// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         {/* <p>
// //           Edit <code>src/App.tsx</code> and save to reload.
// //         </p> */}
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;


// import Posts from "./components/Posts";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//         <h1>Sagar Radadiya Flutter / iOS Developer</h1>
//         <h1><u>sagarradadiya55@gmail.com</u></h1>
//       </header>
//       <Posts />
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts') // Use HTTPS here
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Sagar Radadiya Flutter / iOS Developer</h1>
        <h1>
          <u>sagarradadiya55@gmail.com</u>
        </h1>
      </header>
      <ul className="posts">
        {posts.map((post) => (
          <li className="post" key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

