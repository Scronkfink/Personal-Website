import React from "react"

const App = () => {
  return(
    <div>
      <h1>Jackson's (temporary) Portfolio</h1>
      <div>The following are the repositories of projects I've worked on:</div>
    <ul>
      <li>
      <a href="https://github.com/oslabs-beta/VisionMQ" target="_blank">RabbitMQ Visualizer</a>
      </li>
      <li>
      <a href="https://github.com/visionmq/Trekker" target="_blank">Mock Airbnb with microservices communicating via RabbitMQ</a>
      </li>
      <li>
      <a href="https://github.com/Velocirabbit-cs/swoop-nyc" target="_blank">
      Discarded item locator for New Yorkers</a>
      </li>
    </ul>
    </div>
  )
}

export default App