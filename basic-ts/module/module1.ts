export function add_module(a: number, b: number): number {
    return a + b;
}

export function minus_module(a: number, b: number): number {
    return a - b;
}

// 하나씩 export 를 안하고 한번에 export도 할 수 있다.
// export {add_module, minus_module};

// 파일, 모듈마다 중복되는 함수가 있을 수도 있다. 그래서 네임 스페이스를 부여할 수 있다.
export namespace MODULE_EXAMPLE {
    export function add_module(a: number, b: number): number {
        return a + b;
    }
    
    export function minus_module(a: number, b: number): number {
        return a - b;
    }
}