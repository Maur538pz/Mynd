import { useEffect } from 'react'
import io from 'socket.io-client'

export const TimeTracker = () =>{
    useEffect(()=>{
        const socket = io('http://localhost:3000/')
        socket.on('miEvento',data=>{
            console.log(data)
        })

        return ()=>{
            socket.disconnect()
        }
    },[]);
    return (
        <div>
            Main Time Tracker
        </div>
    )

}