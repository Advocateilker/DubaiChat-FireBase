import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase/config'
import { addDoc, collection, onSnapshot, serverTimestamp, query, where, orderBy } from 'firebase/firestore'
import Message from '../components/Message'


const Chat = ({ setRoom, room }) => {

    const [messages, setMessages] = useState(null)

    const messagesRef = collection(db, "messages")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const text = e.target[0].value

        await addDoc(messagesRef, {
            text,
            room,
            author: {
                name: auth.currentUser.displayName,
                uid: auth.currentUser.uid,
                photo: auth.currentUser.photoURL,
            },
            createdAt: serverTimestamp()
        })

        e.target[0].value = ""
    };

    useEffect(() => {

        const queryOptions=query(messagesRef,where("room","==",room),orderBy("createdAt","asc"))

        const unsubscribe = onSnapshot(queryOptions, (snapshot) => {
            const tempData = [];
            snapshot.docs.forEach((doc) => tempData.push(doc.data()))
            setMessages(tempData)
        })
        return ()=> unsubscribe()
    }, [])




    return (
        <div className='container'>

            <div className='chat'>
                <header>
                    <p>{auth?.currentUser?.displayName}</p>
                    <p>{room}</p>
                    <button onClick={() => setRoom(null)}>Different Room</button>
                </header>
                <main>
                    {messages?.map((mes,i)=><Message key={i} mes={mes}/>)}

                </main>
                <form onSubmit={handleSubmit}>
                    <input required placeholder='Your Message...' type="text" />
                    <button>Send</button>
                </form>
            </div>

        </div>
    )
}

export default Chat