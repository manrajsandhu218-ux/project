import React from 'react'
import banner from './Images/images.jpeg'
import "./App.css"

const App = (props) => {
  return (

    <div >
      <div id="header">
        <h1>My Portfolio</h1>
        <navbar id="nav" >
          <a>Home</a>
          <a>About</a>
          <a>Portfolio</a>
          <a>Contact</a>
        </navbar>
      </div>
      <div id="content">

        <img id="photo" src={banner} />

        <div id="cont">
          <h1 >About us</h1>
          <h3>Python Full stack <span>Developer</span></h3>
          <p >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sed neque qui odit consequatur nostrum
            voluptatem perferendis corrupti? Non quibusdam officia odit obcaecati qui adipisci nulla aperiam
            repudiandae accusamus rerum officiis ea, quam suscipit assumenda odio molestias repellat ut illo
            enim, nobis est nostrum quos quasi!

          </p>
          <a id="button">contact me</a>
        </div>
      </div>
      <div id="footer">
        <h1>My Portfolio</h1>
      </div>
    </div>
  )
}

export default App
