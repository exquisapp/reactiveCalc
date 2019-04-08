import { Action } from '@ngrx/store';

//create basic calculator actions
export const ADD = "[Calc] add operation";
export const SUBTRACT = "[Calc] subtract operation";
export const DIVISION = "[Calc] DIVISION operation";
export const MULTIPLICATION = "[Calc] MULTIPLICATION operation";

export class Add implements Action{
    readonly type = ADD;
    constructor(public payload: number){}
}

export class Subtract implements Action {
    readonly type = SUBTRACT;
    constructor(public payload: number){}
}

export class Division implements Action {
    readonly type = DIVISION;
    constructor(public payload: number){}
}

export class Multiplication implements Action {
    readonly type = MULTIPLICATION;
    constructor(public payload: number){}
}

export type calculatorTypes = Add | Subtract | Division | Multiplication;
