import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'
import Notification from './Notification.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/story/:id/:total',
      element:<ViewStory/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'/notification',
      element:<Notification/>
    }
  ]
)

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
//npx json-server --watch data/db.json --port 3000 --static ./data