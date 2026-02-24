import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { SelectorComponent } from './selector/selector.component';
import { SvgImageComponent } from './svg-image/svg-image.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ColorControlService } from './color-control.service';


@NgModule({
  declarations: [
    ContainerComponent,
    SelectorComponent,
    SvgImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule
  ],
  exports:[ContainerComponent],
  providers:[ColorControlService]
})
export class TestModule { }
