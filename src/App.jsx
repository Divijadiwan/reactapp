import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import StyledButton from './Button'
import Counter from './Counter'


function App() {
        const students = [
          {name:"lily", score:80},
          {name:"jay", score:50},
          {name:"kat", score:90},
        ]
        const [count, setCount] = useState(1);
        const [post, setPost] = useState(null);
        useEffect(() => {
          // fetching the post data based on the count value
          fetch(`https://jsonplaceholder.typicode.com/posts/${count}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching post:', error));
        },  [count]);


        return (
          <div>
            {students.map((student, index)=>(
              <Greeting key={index} name={student.name} score={student.score}/>
            ))}
        <div className="button">
        <StyledButton/>
        <Counter></Counter>
        </div>
        <p>Current Post ID: {count}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Next Post
      </button>

      {post ? (
        <div>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
        </div>
  )
  
}

export default App
