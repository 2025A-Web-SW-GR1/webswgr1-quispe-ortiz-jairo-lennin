// 1. Objeto básico con tus datos
const jairo = {
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
function mostrarInfo(persona: {nombre: string, edad: number}): void {
    console.log(`\n${persona.nombre} tiene ${persona.edad} años`);
}

mostrarInfo(jairo);

// 4. Arrow functions y destructuración
const mostrarHabilidades = ({habilidades}: {habilidades: string[]}) => {
    console.log("\nHabilidades:");
    habilidades.forEach((habilidad, index) => {
        console.log(`${index + 1}. ${habilidad}`);
    });
};

mostrarHabilidades(jairo);

// 5. Operaciones con arreglos
const numeros = [10, 20, 30, 40, 50];

// Métodos comunes
console.log("\n--- Operaciones con arreglos ---");
console.log("Original:", numeros);
console.log("Map:", numeros.map(n => n * 2));
console.log("Filter:", numeros.filter(n => n > 25));
console.log("Reduce:", numeros.reduce((a, b) => a + b));

// 6. Destructuración
console.log("\n--- Destructuración ---");
const {nombre, edad, ...resto} = jairo;
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Resto de propiedades:", resto);

const [primero, segundo, ...otrosNumeros] = numeros;
console.log("\nPrimeros dos números:", primero, segundo);
console.log("Resto de números:", otrosNumeros);

// 7. Combinar objetos
const datosAcademicos = {
    carrera: "Ingeniería en Software",
    semestre: 5,
    universidad: "UTPL"
};

const jairoCompleto = {...jairo, ...datosAcademicos};
console.log("\n--- Objeto combinado ---");
console.log(jairoCompleto);

// 8. Tipos de funciones
function funcionVoid(): void {
    console.log("\nEsta función no retorna nada");
}

function funcionConReturn(): string {
    return "Esta función retorna un string";
}

const funcionFlecha = (a: number, b: number): number => a + b;

funcionVoid();
console.log(funcionConReturn());
console.log("Suma con flecha:", funcionFlecha(5, 10));