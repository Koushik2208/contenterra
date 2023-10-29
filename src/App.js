import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

function App() {
  const [redditData, setRedditData] = useState([])
  const getData = async () => {
    try {
      const response = await axios.get(`https://www.reddit.com/r/reactjs.json`)
      console.log('Reddit data : ', response.data.data.children)
      setRedditData(response.data.data.children)
    } catch (error) {
      console.log('Error getting reddit data : ', error)
    }
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      {redditData.map((item, index) => {
        return (
          <div key={index}>
            <Card item={item} />
          </div>
        )
      })}
    </>
  );
}

export default App;
