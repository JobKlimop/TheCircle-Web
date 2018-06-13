import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService {
 
    constructor(private socket: Socket) { }
 
    sendMessage(msg: string){
        this.socket.emit("message", msg);
    }
    
    /* getMessage() {
        return this.socket
            .fromEvent("message")
            .map( data.msg => data );
    }*/
}