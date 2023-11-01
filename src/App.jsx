import { useState } from 'react'
import AuthPage from './pages/AuthPage'


import RoomPage from './pages/RoomPage'
import Chat from './pages/Chat'


function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"))
  const [room, setRoom] = useState()

  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />
  }

  return (
    room ? <Chat room={room} setRoom={setRoom}/>
    :<RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />)


}

export default App
