const ob = {
    name : "ohtaeg",
    age : 32,
    sex : "male"
}
console.log(ob.asdf); // 없는 키값이라 undefined가 나옴

// ? 는 값이 있는지 없는지 모르겠다라는 뜻으로 참조하는 변수에 ?를 붙여 이 값이 없으면 undefined를 출력하세요를 의미
// 해당 참조 변수에 값이 있을 수도 없을수도 있는 상황에 씀
console.log(ob?.asdf?.hi);

// ob.asdf가 null이면 seoul로 해라
console.log(ob.asdf?? "seoul"); 
// 삼항 연산자와 비슷함
console.log(ob.asdf ? ob.asdf : "seoul"); 