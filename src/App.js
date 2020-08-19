/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from 'react';
import './App.css';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Message from './Message';
import db from "./Firebase"
import firebase from "firebase"
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('')
  const [messeges, setMesseges] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(prompt("Enter Your Name "))
  }, [])
  useEffect(() => {
    db.collection("messages")
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMesseges(snapshot.docs.map(doc => ({ id: doc.id, messege: doc.data() })))
      })
  }, [])



  const sendMessege = e => {
    setMesseges([...messeges, { username: username, messege: input }])

    e.preventDefault()


    db.collection("messages").add({
      messege: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
  }

  return (
    <div className="App">
      <img src="https://www.shareicon.net/data/128x128/2016/07/10/119903_facebook-messenger_512x512.png " alt="not" />
      <h1>HELLO MESSENGER 🚀 </h1>
      <h4>Welcome {username}</h4>
      <form className="app__form">

        <FormControl className="app__formControl">
          <Input className="app__Input" placeholder="Enter a message..." onChange={e => {
            setInput(e.target.value)
          }} value={input}></Input>


          <IconButton
            className="app__iconButton"
            variant="outlined"
            disabled={!input} color="primary" type="submit" onClick={sendMessege}>
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>



      <FlipMove>
        {
          messeges.map(({ id, messege }) => (
            <Message key={id} messege={messege} username={username} />))

        }
      </FlipMove>


    </div>
  );
}

export default App;


