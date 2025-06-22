// Comparaciones directas
console.log("--- Comparación null y undefined ---");
console.log("null === null:", null === null); // true
console.log("undefined === undefined:", undefined === undefined); // true
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false
// Comportamiento en condiciones
function evaluarTruthyFalsy(valor) {
    return valor ? "Truthy" : "Falsy";
}
console.log("\n--- Comportamiento Truthy/Falsy ---");
console.log("null:", evaluarTruthyFalsy(null)); // Falsy
console.log("undefined:", evaluarTruthyFalsy(undefined)); // Falsy
console.log("0:", evaluarTruthyFalsy(0)); // Falsy
console.log("'' (string vacío):", evaluarTruthyFalsy("")); // Falsy
console.log("'Jairo':", evaluarTruthyFalsy("Jairo")); // Truthy
console.log("1:", evaluarTruthyFalsy(1)); // Truthy
