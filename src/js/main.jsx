import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>,
)
const reactRender = ReactDOM.createRoot(document.getElementById('root'));
let counter = 0;
setInterval(() => {
  const four = Math.floor(counter/1000)
  const three = Math.floor(counter/100)
  const two = Math.floor(counter/10)
  const one = Math.floor(counter/1)
  counter++
  reactRender.render(
  <React.StrictMode>
    <Home 
      digiFour = {four}
      digiThree = {three}
      digiTwo = {two}
      digiOne = {one}
    />
    
  </React.StrictMode>,
)
}, 1000);