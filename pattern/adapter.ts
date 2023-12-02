// 계산기 인터페이스가 있는데 명세가  바뀌어 버렸다. 기존 구현체는 그럼 에러가 난다.
// 이때 어댑터를 활용하여 해결할 수 있다.
// 자주 변경되는 요구사항에 적용해볼 수 있는 있는 패턴이지만, 그만큼 클래스 관리 리소스가 소비된다. 남용은 하지말자.
interface ICalculator {
    addChanged(a: number, b: number): number;
  
    minusChanged(a: number, b: number): number;
}

class BeforeCalculatorImpl {

    add(a: number, b: number): number {
        return a + b;
    }

    minus(a: number, b: number): number {
        return a - b;
    } 
}

class CalculatorAdapter extends BeforeCalculatorImpl implements ICalculator {
    
    constructor(private _adaptee: BeforeCalculatorImpl) {
        super();
        this._adaptee = _adaptee;
    }

    addChanged(a: number, b: number): number {
        return this._adaptee.add(a, b);
    }

    minusChanged(a: number, b: number): number {
        return this._adaptee.minus(a, b);
    }
}

const cal: ICalculator = new CalculatorAdapter(new BeforeCalculatorImpl);
console.log(cal.addChanged(1, 2));
console.log(cal.minusChanged(5, 3));