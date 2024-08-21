import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Calendario from './pages/Calendario'
import ForFun from './pages/ForFun'
import Noticias from './pages/Noticias'
import Sobre from './pages/Sobre'
import Times from './pages/Times'
import Midia from './pages/Midia'
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path:'/calendario',
    element: <Calendario />
  },
  {
    path:'/forfun',
    element: <ForFun />
  },
  {
    path: '/noticias',
    element: <Noticias />
  },
  {
    path: '/sobre',
    element: <Sobre />
  },
  {
    path: '/times',
    element: <Times />
  },
  {
    path: '/midia',
    element: <Midia />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
