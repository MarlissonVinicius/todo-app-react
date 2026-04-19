import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import TaskPage from './pages/TaskPage.tsx'

const router = createBrowserRouter([
  {path: '/home',
    element:<App></App>
  },
  {path:'/task-detail',
    element:<TaskPage></TaskPage>
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
