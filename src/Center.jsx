import React from 'react'
import Story from './Story.jsx'
import Post from './Post.jsx'

function Center() {
  return (
    <>
    <div className="story "><Story/></div>
    <div className="mt-4" ><Post/></div>
    </>
   
   
  )
}

export default Center