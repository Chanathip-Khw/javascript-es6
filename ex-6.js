let height = undefined;
let result;

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”

function isUndefined(data) {
    return data ?? "Height is not defined"
}

console.log(isUndefined(result))