function printDups(str) {
    let charCount = {};
 
    for (let i = 0; i < str.length; i++) {
        let character = str[i];
        charCount[character] = (charCount[character] || 0) + 1;
    }
}
 
let str = "helloArshad"
printDups(str);
