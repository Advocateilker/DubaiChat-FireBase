import React from 'react'
import { auth } from '../firebase/config'


const Message = ({mes}) => {

    console.log(mes)

if(auth.currentUser.uid===mes.author.uid){
    return <div className='self'><p  className='msg-self'>{mes.text}</p></div>
}

  return (
    <div className='msg-other'>
        <p className='user-info'>
            <img src={mes.author.photo} alt="" />
            <span>{mes.author.name}: </span>
        </p>
        <p className='msg-text'>{mes.text}</p>
    </div>
  )
}

export default Message