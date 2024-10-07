// Dado el array
const array = ["Joaquin", 1, ["Hola", "Adios"], true];

// Ejercicio 1: Recorrer el array e insertar los valores en localStorage
array.forEach((element, i) => {
    // Convertimos los valores a JSON por si alguno es un array u objeto
    localStorage.setItem(`variable${i}`, JSON.stringify(element));
});

// Ejercicio 2: Recorrer de 0 a la longitud del array y obtener los valores del localStorage
for (let i = 0; i < array.length; i++) {
    // Obtener el valor del localStorage
    const value = JSON.parse(localStorage.getItem(`variable${i}`)); // Convertimos de JSON a su valor original

    // Ejercicio 3: Crear un div por cada valor y asignar el valor
    const div = document.createElement("div");
    div.textContent = value; // Insertamos el valor dentro del div

    // Ejercicio 4: Insertar los divs en el body del HTML
    document.body.appendChild(div);
}