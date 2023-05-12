# TEST JS

### VARIABLES

#### 1. Responde las siguientes preguntas en la seccion de comentarios:

- **que es una variable y para que sirve?**

  - Una variable es un espacio en memoria y sirve para guardar cualquier tipo de valor segun su tipo para poder usarse mas adelante en el codigo.

- **cual es la diferencia entre declarar e inicializar una variable?**

  - DECLARAR: es escribir en codigo la variable sin agregarle ningun valor para poder ser usada despues cuando se requiera.

  - INICIALIZAR: es cuando se le agrega un valor a una variable declarara con anterioridad.

- **cual es la diferencia entre sumar numeros y concatenar strings?**

  - Que cuando sumas numeros estas aumentando un valor numerico y cuando concatenas strins estas uniendo una cadena de texto a otro texto.

- **cual operador me permite sumar o concatenar?**

  - El operar suma '+'.

#### 2. Determina el nombre y tipo de dato para almacenar en variables la siguiente informacion:

-     nombre: string.
-     apellido: string.
-     nombre de usuario: string.(@fulanito).
-     edad: number.
-     correo electronico: string.(fulanito@gmail.com)
-     mayor de edad: boleean.
-     dinero ahorrado: number.
-     deudas: number.

#### 3. Traduce a codigo js las variables del ejemplo anterior y deja tu codigo en los comentarios.

```javascript
let nombre = "fulanito jose";
let apellido = "matias her";
let user = "jojojo";
let edad = 60;
let email = "jojojojo@gmail.com";
let esMayorDeEdad = true;
let ahorros = 100;
let deudas = 50;
```

#### 4. Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

```javascript
let nombreCompleto = nombre + " " + apellido;
let dineroReal = ahorros - deudas;
```

[========]

### FUNCIONES

#### 1. responde las siguientes preguntas

- **que es una funcion?**

  - una función es un bloque de código que se define una vez y se puede llamar múltiples veces para realizar una tarea específica.

- **cuando me sirve usar una funcion en mi codigo?**

  - cuando quiero simplificar el codigo , poder reutilizarlo y hacerlo modular.

- **cual es la diferencia entre parametros y argumentos de una funcion?**

  - La diferencia entre los parámetros y los argumentos de una función es que los parámetros son variables definidas en la declaración de la función, mientras que los argumentos son los valores reales que se pasan a la función cuando se la llama.

#### 2. convierte el siguiente codigo en una funcion,pero,cambiando cuando sea necesario las variables constantes por parametros y argumentos en una funcion:

```javascript
const name = "Ieesus Steve";
const lastName = "Chumpitaz Castillo";
const completeName = name + lastNanme;
const nickname = "Darkwolfiees";

console.log(
  "Mi nombre es " +
    completeName +
    ", pero prefiero que me digas " +
    nickname +
    " ."
);
```

- #####Convirtiendo:

```javascript
function user(name, lastName, nickname) {
  const completeName = name + " " + lastName;
  console.log(
    `Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}.`
  );
}

user("ieesus Steve", "Chumpitaz castillo", "Darkwolfiees");
```

[========]

### CONDICIONALES

#### 1. Responde las siguientes preguntas:

- **Que es un condicional?**

  - Una condicional es una estructura de control que permite ejecutar un bloque de código si se cumple una determinada condición.

- **Que tipos de condicionales existen en JavaScript y cuales son sus diferencias?**

  - existen los if, else if, else, switch.

  - La principal diferencia entre estos tipos de condicionales es cómo se estructuran y cómo se evalúan las condiciones. Los condicionales "if", "else if" y "else" son estructuras secuenciales que evalúan las condiciones en orden y se detienen en la primera condición verdadera. Por otro lado, la estructura "switch" evalúa una variable y ejecuta el código correspondiente a cada caso.

- **Puedo combinar funciones y condicionales?**
  - Si, es muy común combinar funciones y condicionales en JavaScript para crear programas más complejos y poderosos.

#### 2. Replica el comportamiento del siguiente codigo que usa la sentencia switch utilizando if,else y elseif:

```javascript
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "ExpertDuo":
    console.log(
      "Tu y alguien mas pueden tomar TODOS los cursos de platzi durante un año"
    );
    break;
}
```

- ##### replicando usando if, else if ,else:

```javascript
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else {
  console.log(
    "Tu y alguien mas pueden tomar TODOS los cursos de platzi durante un año"
  );
}
```

#### 3. Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if(sin else ni else if):

```javascript
let planesPlatzi = {
  Free: "Solo puedes tomar los cursos gratis",
  Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
  ExpertDuo:
    "Tu y alguien mas pueden tomar TODOS los cursos de platzi durante un año",
};
let planSeleccionado = "Basic";

if (planesPlatzi[planSeleccionado]) {
  console.log(planesPlatzi[planSeleccionado]);
  return;
}
console.warn("Ese tipo de suscripcion no existe");
```

[========]

### CICLOS

#### 1. Responde las siguientes preguntas:

- **Que es un ciclo?**

  - Un ciclo es una estructura de control que permite repetir un conjunto de instrucciones varias veces. También se conoce como bucle.

- **Que tipos de ciclos existen en JAVASCRIPT?**

  - Ciclo While: ejecuta un conjunto de instrucciones mientras se cumpla una condición.

  - Ciclo For: ejecuta un conjunto de instrucciones un número específico de veces, según los valores de inicio, final y paso.

  - Ciclo Do-While: es similar al ciclo While, pero primero ejecuta el conjunto de instrucciones y luego evalúa la condición.

- **Que es un ciclo infinito y por que es un problema?**

  - Un ciclo infinito es un bucle que se ejecuta sin fin y no permite que el programa avance a otras tareas.
  - Es un problema por que puede causar problemas de rendimiento y bloqueos del sistema.

- **Puedo mezclar ciclos y condicionales?**
  - Si, es muy comun mezclar ciclos y condicionales, la combinación de ciclos y condicionales es una técnica fundamental en programación y es utilizada en una gran variedad de aplicaciones y lenguajes de programación para crear algoritmos más complejos y poderosos.

#### 2. replica el comportamiento de los siguientes ciclos for utilando ciclos while:

```javascript
for (let i = 0; i < 5; i++) {
  console.log("El valor de i es : " + i);
}

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}
```

- #####replicando usando ciclos while:

```javascript
let i = 0;
while (i < 5) {
  console.log("El valor de i es:" + i);
}

let j = 10;
while (j >= 2) {
  console.log("El valor de i es: " + i);
}
```

#### 3. Escribe un codigo en JavaScript que le pregunte a los usuarios cuanto es 2 +2. Si responden bien,mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```javascript
let resultado;

do {
  resultado = prompt("cuanto es 2 + 2 ?");

  if (resultado == 4) {
    alert("¡Felicitaciones! Respondiste bien.");
  } else {
    alert("Te equivocaste. Vuelve a intentar.");
  }
} while (resultado != 4);
```

[========]

### LISTAS

#### 1. Responde las siguientes preguntas en la seccion de comentarios:

- **Que es un array?**
  - Un array es una estructura de datos, que almacena elementos ordenadamente y se accede a ellos mediante un indice númerico. Se usa en programación para manejar colecciones de datos de manera eficiente en diversas aplicaciones.
- **Que es un objeto?**
  - Un objeto en programación es un conjunto de datos y funciones relacionadas que se utilizan para modelar algo del mundo real.
- **Cuando es mejor usar objetos o arrays?**
  - Dependiendo de las necesidades del codigo, si necesita manipular una colección ordenada de elementos del mismo tipo, un array es la mejor opción. Si necesita modelar objetos complejos con propiedades y comportamientos específicos, un objeto es la mejor opción.
- **Puedo mezclar arrays con objetos o incluso objetos con arrays?**
  - mezclar arrays con objetos u objetos con arrays es común y puede ser muy útil en la creación de estructuras de datos complejas en programación.

#### 2. Crea una funcion que pueda recibir cualquier array como parametro e imprima su primer elemento.

```javascript
let miArray = [1, 2, 3, 4, 5];

function imprimirPrimerElemento(array) {
  console.log(array[0]);
}

imprimirPrimerElemento(miArray);
```

#### 3. Crea una funcion que pueda recibir cualquier array como parametro e imprima todas sus elementos uno por uno (no vale imprimir el array completo).

```javascript
let miArray = [1, 2, 3, 4, 5];

function imprimirTodosLosElementos(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
imprimirTodosLosElementos(miArray);
```

#### 4. Crea una funcion que pueda recibir cualquier objeto como parametro e imprima todos sus elementos uno por uno(no vale imprimir el objeto completo).

```javascript
let personas = [
  { nombre: "Juan", edad: 25, genero: "masculino" },
  { nombre: "Maria", edad: 30, genero: "femenino" },
  { nombre: "Pedro", edad: 28, genero: "masculino" },
];

function imprimirTodasLasPersonas(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
imprimirTodasLasPersonas(personas);
```
