
import * as calculatorActions from './../actions/calculator.action';

export interface CalculatorState {
    firstNumber: number;
    secondNumber: number;
    total: Number;
}

const initialState: CalculatorState = {
    firstNumber : null,
    secondNumber: null,
    total: 0
}

export function calculatorReducer( state: CalculatorState = initialState, action: calculatorActions.calculatorTypes): CalculatorState{
    switch(action.type){
        case calculatorActions.ADD: {
            console.log("add has been called", action.payload);
            return state;
        }
        case calculatorActions.SUBTRACT: {
            console.log("subtract has been called");
            return state;
        }
        case calculatorActions.DIVISION: {
            console.log("division called");
            return state;
        }
        case calculatorActions.MULTIPLICATION: {
            console.log("Multiplication called");
            return state;
        }
    }
    return state;
}