import { Injectable } from "@angular/core";

const host = "ws://the-circle-chat.herokuapp.com/"

let socket = require("socket.io-client")

@Injectable()

export class ChatService {
     constructor(){
        console.log('chat service')
        socket = socket.connect(host, {
            transports: ['websocket'],
            rejectUnauthorized: false
        })
        this.addEventHandlers();
         
     }

   
    
    addEventHandlers(){

        socket.on('connect', () => {
            console.log("Connected");
            this.setUsername("Mika");
            this.joinRoom("room-1");
            this.getClientCount("room-1");
        })
    
            // Fires after a connection error.
        socket.on('connect_error', (error) => {
            console.log(error);
        });
    
        // Fires after the connection times out.
        socket.on('connect_timeout', (timeout) => {
            console.log(timeout);
        });
    
        // Fires after an error.
        socket.on('error', (error) => {
            console.log(error);
        });
    
        // Fires after disconnecting from the server.
        socket.on("disconnect", (reason) => {
            console.log(reason);
        });
    
        // Fires after successfully reconnecting to the server.
        socket.on('reconnect', (attemptNumber) => {
            console.log("Reconnected after " + attemptNumber + " attempts");
        });
    
        // Fires after each reconnect attempt.
        // "reconnecting" event does the same.
        socket.on('reconnect_attempt', (attemptNumber) => {
            console.log("Trying to reconnect, attempt " + attemptNumber);
        });
    
        // Fires after a reconnection attempt error.
        socket.on('reconnect_error', (error) => {
            console.log(error);
        });
    
        // Fires after failing to reconnect after certain number of tries.
        socket.on('reconnect_failed', () => {
            console.log("Failed to reconnect");
        });
    
        // Fires when pinging the server, pinging happens automatically.
        socket.on('ping', () => {
            console.log("Pinging server...");
        });
    
        // Fires when a ping response is received from the server.
        socket.on('pong', (latency) => {
            console.log("Server latency: " + latency + "ms");
        });
    
    
        // CUSTOM EVENTS
    
        // Fires when receiving a message from the server.
        // contains the room the message is meant for, the message sender & the message itself
        socket.on("message", (message) => {
            console.log(message.timestamp + " " + message.room + " " + message.user + ": " + message.content);
        });
    
        // Fires when receiving connection info.
        // info contains:
        // 	    user        username associated with the connection
        // 		rooms       array of rooms the user is in
        // 		server      server url the user is connected to
        // 		dyno        heroku dyno the user is connected to
        // 		worker      worker the user is connected to
        socket.on("connection_info", (info) => {
            console.log(info);
        });
    
        // Fires after joining a room.
        socket.on("room_joined", (room) => {
            console.log("Joined room " + room);
        });
    
        // Fires after leaving a room.
        socket.on("room_left", (room) => {
            console.log("Left room " + room);
        });
    
        // Fires after setting a username.
        socket.on("username_set", (username) => {
            console.log("Username set to " + username);
        });
    
        // Fires after receiving the amount of clients connected to a room.
        // Response contains the name of the room and the amount of clients connected to it.
        socket.on("client_count", (response) => {
            console.log(response.room + " has " + response.numberOfClients + " clients connected");
        });
    }
    
    // Send a message to a room by emitting the "message" event and including the name of the room and your message.
    // You can only send messages after providing a username by emitting the "set_username" event & by having joined the
    // room you are sending the message to.
    sendMessage(room, message) {
        socket.emit("message", {room: room, content: message});
    }
    
    // Before you can send messages, you need to provide a username.
    // Do this by emitting the "set_username" event and sending your username.
    setUsername(username) {
        socket.emit("set_username", username);
    }
    
    // Subscribe to a room by emitting the "join_room" event and sending the name of the room you want to join.
    // The name of the room is the username of the room owner (the streamer).
    joinRoom(room) {
        socket.emit("join_room", room);
    }
    
    // Unsubscribe from a room by emitting the "leave_room" event and sending the name of the room you want to leave.
    // The name of the room is the username of the room owner (the streamer).
    leaveRoom(room) {
        socket.emit("leave_room", room);
    }
    
    // Emit a "connection_info" event to receive information about the connection (username, rooms joined, etc.).
    getConnectionInfo() {
        socket.emit("connection_info");
    }
    
    // Emit a "client_count" event to request the amount of connected clients of a given room you are in.
     getClientCount(room) {
        socket.emit("client_count", room);
    }
}


 