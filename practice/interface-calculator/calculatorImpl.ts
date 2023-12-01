import { ICalculator } from "./calculator";

export class CalculatorImpl implements ICalculator {
    add(a: number, b: number): number {
        return a + b;
    }

    minus(a: number, b:number): number {
        return a - b;
    }

    multiple(a: number, b:number): number {
        return a * b;
    }
}