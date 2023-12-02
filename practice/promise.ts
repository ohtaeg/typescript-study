// axios의 promise와 async,  ts를 같이 활용해본다.
// $ npm i axios
// $ npm i -D @types/axios

import axios from "axios";

interface IEntry {
    [props: string]: string | boolean;
}

interface IResponse {
    count: number;
    entries: IEntry[];
}

(async () => {
    // TS 진영에서 Promise 제네릭 타입을 지원함
    const data: Promise<IResponse> = axios
        .get("https://api.publicapis.org/entries")
        .then(response => response.data)
        .catch(e => console.log(e));

    console.log("fetch result", (await data).entries[0]);
})();


(async () => {
    const data: Array<Promise<IResponse>> = await Promise.all([
      axios
        .get("https://api.publicapis.org/entries")
        .then((res) => res.data.entries)
        .catch((e) => console.log(e)),
      axios
        .get("https://api.publicapis.org/entries")
        .then((res) => res.data.entries)
        .catch((e) => console.log(e)),
      axios
        .get("https://api.publicapis.org/entries")
        .then((res) => res.data.entries)
        .catch((e) => console.log(e)),
    ]);
  
    console.log("fetch result1", data[0][0]);
    console.log("fetch result2", data[1][0]);
    console.log("fetch result3", data[2][0]);
  })();