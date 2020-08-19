import React, { forwardRef } from 'react'
import { CardContent, Typography, Card } from '@material-ui/core'
import "./Message.css"
const Message = forwardRef(({ messege, username }, ref) => {

    const isUser = username === messege.username
    return (
        <div ref={ref} className={`message__card ${isUser && 'message__cardUser'}`}>
            {/* <h2>{username} : {messages}</h2> */}

            <Card className={isUser ? "message__userCard" : "message__guestCard"}>
                <CardContent>
                    <Typography
                        color="white"
                        varient="h5"
                        component="h2">
                        {!isUser && `${messege.username || "Unknown User"} : `}{messege.messege}


                    </Typography> 
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
