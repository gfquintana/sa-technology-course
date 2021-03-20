# Introducción a JavaScript



![jsbook](/c2/imagenes/jsbook.jpg)

## Contenido

- Conceptos generales
- Closures
- Operaciones Asincrónicas

### Conceptos generales

1. *Destructuring and spread operator*
   - Genera una copia superficial (*shallow copy*) de un objeto iterable
   - Útil para simplificar copias de objetos y lecturas de propiedades nesteadas
2. *Arrow functions*
   - Una forma más compacta de definir una función en JS
   - No es 100% análogo a definir una función con la palabra clave function()
3. *Falsy statements*
   - *Undefined*, null, NaN, 0, “” son considerados *falsy* y se evaluan a false 

### *Closures* 

#### *Execution Context*

1. El ambiente donde un código de JavaScript es ejecutado
2. Ambiente: por ejemplo, variables, funciones, this, objetos
3. Existen dos tipos
   - *Global Execution Context*: se crea cuando el motor comienza a ejecutar el código
   - *Function Execution Context:* se crea cuando se invoca una función
4. Existen dos fases al ejecutar un execution context
   - Creación
   - Ejecución

#### *Scope*

- Es el *execution scope* actual donde el código se está ejecutando
- Existen dos tipos de scopes en JS, el global y el local

### *Closures*

`var name = 'Martin';`

`console.log(name); // logs 'Martin'`

`function logName() {`

  `console.log(name); // 'name' is accessible here and everywhere else`

`}`

`logName(); // logs 'Martin'``

Al definir una función se crea un scope local que existe solo dentro del cuerpo de esa función.

`// Global Scope`

`function someFunction() {`

  `// Local Scope #1`

  `function someOtherFunction() {`

​    `// Local Scope #2`

  `}`

`}`

`// Global Scope`

`function anotherFunction() {`

  `// Local Scope #3`

`}``

`// Global Scope`

Las variables y funciones definidas dentro del scope local solo se pueden acceder desde ese mismo scope o de scopes hijos de este.

Las clousures nos permite crear funciones “privadas” y factories de funciones.

#### Ejercicio

¿Qué imprime el siguiente código?

`var arr = [10, 12, 15, 21];`

`for (var i = 0; i < arr.length; i++) {`

 `setTimeout(function() {`

  `console.log('Index: ' + i + ', element: ' + arr[i]);`

 `}, 3000);`

`}`

### Operaciones asincrónicas

#### *Callbacks*

- Cuando una función acepta como parámetro a otra función.
- La función que acepta a otra como uno de sus argumentos se llama “high order function”

`setInterval(function() {`

 `console.log('hello!');`

`}, 1000);`

##### Tambien podemos “enganchar” callbacks...

`const makeBurger = nextStep => {`

 `getBeef(function (beef) {`

  `cookBeef(beef, function (cookedBeef) {`

   `getBuns(function (buns) {`

​    `putBeefBetweenBuns(buns, beef, function(burger) {`

​     `nextStep(burger)`

​    `})`

   `})`

  `})`

 `})`

`}`

`// Make and serve the burger``

`makeBurger(function (burger) => {`

 `serve(burger)`

`})`

### Promises

- Son objetos que retornaran otro objeto en el futuro.
- Son mas claras para expresar el flujo del codigo que los callbacks
- Tiene 3 estados Pending, Rejected, Fulfilled  

`const promise = new Promise(function(resolve, reject) {`

 `// promise description`

`})`

const makeBurger = () => {

 return getBeef()

  .then(beef => cookBeef(beef))

  .then(cookedBeef => getBuns(beef))

  .then(bunsAndBeef => putBeefBetweenBuns(bunsAndBeef));

};

// Make and serve burger

makeBurger().then(burger => serve(burger));

#### *Async & await*

- Son unas palabras clave para manejar código asincrónico de forma síncrona
- Las funciones async siempre retornan una promise
- Así como en las promises esperamos un resultado con el *then*, cuando tenemos una función *async* lo hacemos con el *await*

`const makeBurger = async () => {`

 `const beef = await getBeef();`

 `const cookedBeef = await cookBeef(beef);`

 `const buns = await getBuns();`

 `const burger = await putBeefBetweenBuns(cookedBeef, buns);`

 `return burger;`

`};`

`// Make and serve burger`

`makeBurger().then(serve);`
