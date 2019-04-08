import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pizza } from './../models/pizza.model';
import * as fromStore from './../store';

import * as allActions from './../store/actions/calculator.action';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
//a dependency injection from the StoreModule
  constructor(private store: Store<fromStore.ProductState>) { }

  ngOnInit() {
    this.store.select<any>('reactiveCalc').subscribe(data => console.log(data));
  }

  dispatchLoad(){
    this.store.dispatch(new allActions.Add(2));
  }

}
