var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// 1. Objeto básico con tus datos
var jairo = {
    nombre: "Jairo Quispe",
    edad: 21,
    cedula: 1751405570,
    habilidades: ["JavaScript", "TypeScript", "Fútbol"],
    estudiante: true
};
// 2. Acceso y modificación de propiedades
console.log("--- Acceso a propiedades ---");
console.log("Nombre completo:", jairo.nombre); // Notación con punto
console.log("Edad:", jairo["edad"]); // Notación con corchetes
// Modificando propiedades
jairo.edad = 22; // Cumpliste años
jairo.habilidades.push("React"); // Añadiendo nueva habilidad
// 3. Funciones con objetos
function mostrarInfo(persona) {
    console.log("\n".concat(persona.nombre, " tiene ").concat(persona.edad, " a\u00F1os"));
}
mostrarInfo(jairo);
// 4. Arrow functions y destructuración
var mostrarHabilidades = function (_a) {
    var habilidades = _a.habilidades;
    console.log("\nHabilidades:");
    habilidades.forEach(function (habilidad, index) {
        console.log("".concat(index + 1, ". ").concat(habilidad));
    });
};
mostrarHabilidades(jairo);
// 5. Operaciones con arreglos
var numeros = [10, 20, 30, 40, 50];
// Métodos comunes
console.log("\n--- Operaciones con arreglos ---");
console.log("Original:", numeros);
console.log("Map:", numeros.map(function (n) { return n * 2; }));
console.log("Filter:", numeros.filter(function (n) { return n > 25; }));
console.log("Reduce:", numeros.reduce(function (a, b) { return a + b; }));
// 6. Destructuración
console.log("\n--- Destructuración ---");
var nombre = jairo.nombre, edad = jairo.edad, resto = __rest(jairo, ["nombre", "edad"]);
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Resto de propiedades:", resto);
var primero = numeros[0], segundo = numeros[1], otrosNumeros = numeros.slice(2);
console.log("\nPrimeros dos números:", primero, segundo);
console.log("Resto de números:", otrosNumeros);
// 7. Combinar objetos
var datosAcademicos = {
    carrera: "Ingeniería en Software",
    semestre: 5,
    universidad: "UTPL"
};
var jairoCompleto = __assign(__assign({}, jairo), datosAcademicos);
console.log("\n--- Objeto combinado ---");
console.log(jairoCompleto);
// 8. Tipos de funciones
function funcionVoid() {
    console.log("\nEsta función no retorna nada");
}
function funcionConReturn() {
    return "Esta función retorna un string";
}
var funcionFlecha = function (a, b) { return a + b; };
funcionVoid();
console.log(funcionConReturn());
console.log("Suma con flecha:", funcionFlecha(5, 10));
