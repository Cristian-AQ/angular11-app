import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ColorControlService {

    private colorSubject = new BehaviorSubject<String>('black');
    color = this.colorSubject.asObservable();


    setColor(color: String) {
    this.colorSubject.next(color);
  }

  setUnsuscribe(){
    this.colorSubject.unsubscribe()
  }

}
