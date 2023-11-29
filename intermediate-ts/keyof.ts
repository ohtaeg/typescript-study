interface Book {
    title: string;
    publisher: string;
    price: number;
    author: string;

}

// 정해진 key만 들어오도록 하고 싶다면 keyof
// Book에 있는 key로들만 제한을 한다.
function print(params: Book, key: keyof Book) {
    console.log(params[key]);
}

print ({
    title : "TS 배우기",
    publisher : "asdf",
    price : 5000,
    author : "asdf",
}, "title") // 두번째 파라미터에 다른 key값을 넣으면 에러가 난다.