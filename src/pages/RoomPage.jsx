import React from 'react'
import { auth } from '../firebase/config'
import { signOut } from 'firebase/auth'

const RoomPage = ({ setIsAuth, setRoom }) => {
    const handleLogout = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("token")
            setIsAuth(false)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const roomName = e.target[0].value.toLowerCase()
        // console.log(roomName)
        setRoom(roomName)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='room-page'>
                <h1>Chat Room</h1>
                <p>Which room will you enter?</p>
                <input type="text" placeholder='Example: JVC, JLT, JVT' />
                <button type="submit">Enter Room</button>
                <button type='button' onClick={handleLogout} >Log-Out</button>
            </form>
        </div>
    )
}

export default RoomPage