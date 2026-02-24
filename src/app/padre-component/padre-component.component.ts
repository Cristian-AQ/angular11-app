import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-component',
  templateUrl: './padre-component.component.html',
  styleUrls: ['./padre-component.component.scss']
})
export class PadreComponentComponent{

  sendMessajeToSon = "sendMessajeToSon"
  
  getsendMessageToFather(value:string):void{
    window.alert(value);
  }
}
