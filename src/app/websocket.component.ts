import { Component } from '@angular/core';
import {$WebSocket, WebSocketSendMode} from 'angular2-websocket/angular2-websocket';

@Component({
  selector: 'my-websocket',
  templateUrl : 'websocket.component.html'
})

export class WebSocketComponent{
  ws : $WebSocket;


  // connect
  connect() : void {
    console.log("connect clicked");
    this.ws = new $WebSocket("ws://192.168.0.219:8071/imWebSocket/1/123");// you can send immediately after connect,
    // data will cached until connect open and immediately send or connect fail.

    // when connect fail, websocket will reconnect or not,
    // you can set {WebSocketConfig.reconnectIfNotNormalClose = true} to enable auto reconnect
    // all cached data will lost when connect close if not reconnect


    // set received message callback
    this.ws.onMessage(
      (msg: MessageEvent)=> {
        console.log("onMessage ", msg.data);
      }
    );

    // set received message stream
    // this.ws.getDataStream().subscribe(
    //   (msg)=> {
    //     console.log("next", msg.data);
    //   },
    //   (msg)=> {
    //     console.log("error", msg);
    //   },
    //   ()=> {
    //     console.log("complete");
    //   }
    // );

    this.ws.onOpen(
      () => {
        console.info('websocket open');
      }
    );

    this.ws.onClose(
      () => {
        console.info('websocket close');
      }
    );
  }

  close(): void {
    // this.ws.close(false);    // close
    this.ws.close(true);    // close immediately
  }

  send(message : string): void {
    // send with default send mode (now default send mode is Observer)
    console.log(message);
    if(this.ws.getReadyState() != 1){
      console.log('connect closed');
      return;
    }

    let data = {
      body: message,
      toid: 1,
      fromid: 2,
      action: 'sendmsg'
    };

    // this.ws.send(JSON.stringify(data), WebSocketSendMode.Promise).then(
    //   (T) => {
    //     console.info(T);
    //     console.log("is send");
    //   },
    //   (T) => {
    //     console.info(T);
    //     console.log("not send");
    //   }
    // );

    this.ws.send(JSON.stringify(data)).subscribe(
          (msg)=> {
              console.info("next", msg.data);
          },
          (msg)=> {
              console.error("error", msg);
          },
          ()=> {
              console.info("complete");
          }
      );
  }

}


