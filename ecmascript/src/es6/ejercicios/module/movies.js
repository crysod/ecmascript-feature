import { getData } from "./api.js";

function solution() {
    return getData().then(movies => movies);
}

console.log(solution());