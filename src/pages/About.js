import React, { useContext } from 'react'
import { ClientContext } from "../provider/ClientProvider";
const About = () => {
    const {currentData, setCurrentData } = useContext(ClientContext);
  return (
    <div>
       <button onClick={() =>setCurrentData(currentData -1)}>azalt</button>
      <h1>{currentData}</h1>
    </div>
  )
}

export default About
