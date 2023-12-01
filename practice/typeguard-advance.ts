// 타입 가드시 as를 최대한 적게 쓰는 두가지 방법
// 1. is
type OType = "person" | "animal";

interface ITGPerson {
    type: OType;
    name: string;
    walk(): void;
}

interface ITGAnimal {
    type: OType;
    name: string;
    bark(): void;
}

// 반환값이 boolean이긴한데 ITGPerson인지
function isPerson(o: object): o is ITGPerson {
    return "name" in o && "walk" in o
}

// 반환값이 boolean이긴한데 ITGAnimal인지
function isAnimal(o: object): o is ITGAnimal  {
    return "name" in o && "bark" in o;
}

function gogo(o: ITGPerson | ITGAnimal) {
    // person
    if (isPerson(o)) {
        o.walk();
    }

    // animal
    if (isAnimal(o)) {
        o.bark();
    }
}

gogo({
    type : "person",
    name : "ohtaeg",
    walk() {
        console.log("걷는다");
    }
});

// 2. generic
interface ITGType<T> {
    type: T;
}

interface ITGPerson2 extends ITGType<"person"> {
    name: string;
    walk(): void;
}

interface ITGAnimal2 extends ITGType<"animal"> {
    name: string;
    bark(): void;
}

function gogo2(o: ITGPerson2 | ITGAnimal2) {
    switch(o.type) {
        case "person" :
            o.walk();
            break;
        case "animal" :
            o.bark();
            break;
    }
}

gogo2({
    type : "animal",
    name : "ohtaeg",
    bark() {
        console.log("짖는다");
    }
});
