import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-component',
  templateUrl: './hijo-component.component.html',
  styleUrls: ['./hijo-component.component.scss']
})
export class HijoComponentComponent implements AfterContentInit{
    @ContentChild('childP') contentChild:ElementRef<HTMLTitleElement>;
    @Input() receiveMessageToFather:string;
    @Output() sendMessageToFather = new EventEmitter<String>();

    setSendMessageToFather():void{
      this.sendMessageToFather.emit("hi father");
    }

    ngAfterContentInit(): void {
      console.log(this.contentChild);
      
    }

}
