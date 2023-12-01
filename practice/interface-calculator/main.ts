import { ICalculator } from "./calculator";
import { CalculatorImpl } from "./calculatorImpl";

const cal: ICalculator = new CalculatorImpl;
console.log(cal.add(1, 2));
console.log(cal.minus(3, 4));
console.log(cal.multiple(5, 6));
