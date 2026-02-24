import { Component, OnInit } from '@angular/core';
import { ColorControlService } from '../color-control.service';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent {

  list:String[] = ["red","black","purple"];

  selection = '';

  constructor(private colorControl:ColorControlService){}

  setChangeSelection(){
    this.colorControl.setColor(this.selection);
  }


  

}
