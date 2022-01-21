//atividade 1

function verificarPalindromo(string) {
    if (!string) return;

    return string.split("").reverse().join("") === string;

}
console.log(verificarPalindromo("ovo"));

// atividade 2

function substituiPares(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Você já é zero!");
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0 ...`);
            array[i] = 0;
        }
    }
    return array;
}
let array = [1, 4, 5, 59, 70, 90, 168, 200, 378, 65, 45];
console.log(substituiPares(array));