import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Actions from 'src/app/state/counter/counter.actions'

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  constructor(private store:Store<{counter : number}>){}
  counter$ : Observable<number> = this.store.select('counter')
  increment(){
    this.store.dispatch(Actions.increment())
  }
  decrement(){
    this.store.dispatch(Actions.decrement())
  }
  reset(){
    this.store.dispatch(Actions.reset())
  }
}
