import { useState } from 'react'
import React from "https://esm.sh/react"
import ReactDom from "https://esm.sh/react-dom/client"
import './App.css'

function MyHeader(){
  return(
    <header>
      <h1>My Header</h1>
    </header>
  )
}
function Body(){
  return(
    <main>
      <p>This is the body of the page.</p>
    </main>
  )
}
function Footer(){
  return(
    <footer>
      <p>My Footer</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <MyHeader />
      <Body />
      <Footer />
    </div>
  )
}

export default App