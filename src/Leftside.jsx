import React from 'react'
import { useNavigate} from 'react-router-dom'

function Leftside() {
  const navigate = useNavigate();
  return (
    <>
       <div  style={{backgroundColor:"black"}}>

    <div  className="m-5 mx-2 position-fixed">
        <img className="instatext" src="./src/assets/images/instatext5.webp" alt="" />
    </div >

 <div className=" text my-9  m-5 mx-2 d-flex flex-column gap-4 position-fixed">
    <div><i className="bi bi-house-door-fill"></i>Home</div>
    <div><i className="bi bi-search-heart-fill"></i>Search</div>
    <div><i className="bi bi-compass-fill"></i>Explore</div>
    <div><i className="bi bi-fast-forward-circle-fill"></i>Reels</div>
    <div><i className="bi bi-chat-heart-fill"></i>Messages</div>
    <div  onClick={()=> navigate('/notification')}><i className="bi bi-bell-fill"></i>Notifications</div>
    <div><i className="bi bi-plus-circle"></i>Create</div>
    <div onClick={()=> navigate('/profile')}><i className="bi bi-person-circle"></i>Profile</div>
</div>


 <div className="m-5 mx-2 d-flex flex-column gap-4 position-fixed bottom-0">
      <div><i className="bi bi-threads-fill"></i>Threads</div>
      <div><i className="bi bi-three-dots"></i>More</div>
 </div>
 </div>
    </>


  )
}

export default Leftside