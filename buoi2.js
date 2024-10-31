let count = 0;
function counts(start = 1){
    return (count += start); //count = count + start;
}
let terml = counts()
console.log("goi lan 1, gia tri mat dinh",terml);
let term2 = counts(2);
console.log("co gia tri la 2",term2);
let term3 = counts();
console.log("gia tri mac dinh",term3);