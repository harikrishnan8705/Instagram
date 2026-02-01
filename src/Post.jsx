import React, { useState, useEffect } from 'react'


function Post() {

    const [posts, setPosts] = useState([])

    useEffect(() =>{
        fetch('/data/db.json')
        .then ((response) => response.json())
        .then ((data) => setPosts(data.post))
        .catch ((error) => console.log("error is occurring"))
    }, [])

  return (
    <div>
      {posts.length > 0 ?(
        <div>
          {posts.map((post)=>(
             <div className=" postpage my-3 " key={post.id}>
                <div className="d-flex">
                    <img className="profilepic rounded-circle"  src={post.user.avatar_url} />
                    <h5>{post.user.username}</h5>
                </div>
                <div >
                     <img className="post-image" src={post.image} alt="post" />
                </div>
                <div>
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-send"></i>
                  <i className="bi bi-chat"></i>
                </div>
                <div>
                  <h6>{post.caption}</h6>
                  <b>{post.likes} Likes</b>
                </div>
             </div>
          ))}
        </div>
      ):
      (
        <div>
          post is not available
        </div>
      )}
    </div>
   
   
  )
}

export default Post