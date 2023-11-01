import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase/config'

const AuthPage = ({setIsAuth}) => {

    const handleLogin = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                localStorage.setItem("token", res.user.refreshToken)
                setIsAuth(true)
            })
            .catch((err) => console.log(err))

    }

    return (
        <div className='container'>
            <div className='auth'>
                <h1>FIREBASE - CHAT</h1>
                <p>Login to continue</p>
                <button onClick={handleLogin}>
                    <img src="./google.png" alt="" />
                    <span>Sign in with Google</span>
                </button>
            </div>

        </div>
    )
}

export default AuthPage