import { Component, OnInit } from '@angular/core';
import { ColorControlService } from '../color-control.service';

@Component({
  selector: 'app-svg-image',
  templateUrl: './svg-image.component.html',
  styleUrls: ['./svg-image.component.scss']
})
export class SvgImageComponent implements OnInit {

  bg:String = '';

  constructor(private colorControl:ColorControlService){}

  ngOnInit(): void {

    this.colorControl.color.subscribe(valor=>{
      this.bg = valor;
    })

  }

}
