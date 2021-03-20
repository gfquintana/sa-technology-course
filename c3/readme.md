# Nodejs
Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.

Si bien Javascript es un lenguaje diseñado para ser ejecutado en los navegadores web hoy también es comúnmente utilizado del lado del servidor.
Node.js es un entorno en tiempo de ejecución multiplataforma, de código abierto, para la capa del servidor (pero no limitándose a ello) basado en el lenguaje de programación ECMAScript, asíncrono, con I/O de datos en una arquitectura orientada a eventos y basado en el motor V8 de Google1.

- Javascript en el backend
- Wrapper alrededor un VM como V8
- Platform for tools

Una aplicación Node.js se ejecuta en un solo proceso, sin crear nuevos threads por cada request.
Node.js cuenta con un conjunto de de operaciones de I/O en su librería estándar que evita tener código JS bloqueante, de hecho las librerías escritas para Node.js tienen como norma no utilizar código bloqueante, ejecutar código con ese comportamiento es realmente una excepción.
Cuando Node.js tiene que hacer una operación de I/O (lectura desde la red, acceso a filesystem, etc.) en vez de bloquear el thread esperando por un resultado el mismo continuará con la ejecución y volverá a la operación cuando tenga un resultado. Este es el secreto que permite a Node.js manejar miles de conexiones concurrentes con un solo servidor de manera eficiente.
El objetivo de este práctico es entender cómo funciona Javascript en runtime. Se realizarán ejercicios en un simulador, en el navegador y también en Node.js

Lectura recomendada:
[What is exactly node?](https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/)

# Cuando usar Node
- Entrada y salida 
- Built in modules
- Asynchronous APIs (no threads)
- C++ addons 
- NPM module dependency manager

# Cuando no usar Node
- Tareas pesadas para la CPU.
# Desventajas
- Different way of thinking


# Thinking Async
- Process-Per-Client (Multi-process)
- Thread-per-client (Multi-threaded)
- Event Loop ("Single threaded")

## How Node is different?
El uso inteligente de los clientes es la responsabilidad de tu aplicacion

## Callback
A function that Node will "call back" at a later point of the program

```js
function cb(data) {
    // something
}
```

someAsyncMethod(cd);

## Repl 
[REPL (Read Eval Print Loop)](https://nodejs.org/docs/latest-v10.x/api/repl.html)

- Evalúa en tiempo real expresiones
- Permite probar rápidamente código

Some commands
`.editor`
`.help`

## Timers
var timeoutId = setTimeout(() => {}, 1000)

clearTimeout(timeoutId)

## Environment variables
TEST=1 node testEnv.js

## Más de process
setTimeout(() => process.exit(), 2000);

process.on('exit', () => {
  console.log('Process will exit now. See you later!');
});

console.log('Hello!');

## Npm: Package repository
[NPM (Node package manager)](https://docs.npmjs.com/about-npm/)
### Commands
npm init
npm install --save moment
npm install --save-dev mocha

### Carpetas y Archivos
Ejemplo: 0_versioning_&_update
package.json
package-lock.json
node_modules

### Semantic versioning
4.2.0
- 4: Major - Breaking changes
- 2: Minor - Backward compatibilities
- 0: Patch - Bug fixes

~4.2.0

~: Puede instalar cualquier patch
^: Puede instalar cualquier Minor 
=: Igual a la version 


~4.2.x
x: Cualquiera desde 0

## Paquetes locales y globales
`npm i loadash`

`npm i -g create-react-app`

## Update NPM Packages
`npm update`
`npm show request versions`
Ejemplo: 0_versioning_&_update 

## Creando y publicando un paquete NPM
- Primero crea un carpeta con un proyecto de node (con package.json). Para esto dentro de la carpeta ejecutamos `npm init`. 
- Recuerda que dentro de package.json tiene que tener la propiedad "main: index.js" u otro archivo para que 
    la libreria sabe que exponer cuando otros clientes la requieran
- `npm login` 
- `npm publish` 
- Recuerda: cuando utilices esta librería en un proyecto cliente, procura que la carpeta de la libreria no este dentro de tus carpetas del proyecto cliente, ya que `npm install tu-libreria` detecta que existe la carpeta `tu-libreria` y utiliza esta en vez de considerarla como una libreria normal de internet 
Ejemplo '1_publish-npm'

# Module
Todo archivo o carpeta que contiene codigo.
Ejemplo: '2_module'

# Node globals
Ejemplo: '3_node_globals'

# Variables de entorno
Ejemplo: '4_envs'

# Event loop, blocking & non-blocking code
Video recomendado: [What the heck is the event loop anyway?](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

Javascript: 
- **single thread** - **non blocking asynchronous concurrent leanguage**
- I have: 
  - **a call stack**: one thread == one call stack == one thing at a time
  - **an event loop** 
  - **a callback queue**
  - **some other apis**
  - **and stuff**

![node](https://cdn-media-1.freecodecamp.org/images/1*BBlPbUjGVtfSPd7BHa1LHw.png "Node environment")


Ilustraciones
- [Blocking code](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gYmxvY2tpbmcoKSB7CiAgICB2YXIgc3VtID0gMDsKICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7CiAgICAgICAgc3VtICs9IGk7CiAgICB9CiAgICByZXR1cm4gc3VtOwp9CnZhciBzdW0gPSBibG9ja2luZygpOwpjb25zb2xlLmxvZyhzdW0pOwpjb25zb2xlLmxvZygnQW5vdGhlciBhY3Rpb24gZXhlY3V0aW9uJyk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
- [Non blocking code](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gYmxvY2tpbmcoKSB7CiAgICB2YXIgc3VtID0gMDsKICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTsgaSsrKSB7CiAgICAgICAgc3VtICs9IGk7CiAgICB9CiAgICByZXR1cm4gc3VtOwp9CnNldFRpbWVvdXQoZnVuY3Rpb24gY2IoKSB7CiAgICAvLyBzZXRUaW1lb3V0IGlzIG5vbiBibG9ja2luZwogICAgdmFyIHN1bSA9IGJsb2NraW5nKCk7CiAgICBjb25zb2xlLmxvZyhzdW0pOwp9LCAwKTsKY29uc29sZS5sb2coJ0Fub3RoZXIgYWN0aW9uIGV4ZWN1dGlvbicpOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
- Node.js: Blocking vs Non-Blocking

# Call Stack
- [Call Stack](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbHkobiwgbSkgewogICAgcmV0dXJuIG4gKiBtOwp9CmZ1bmN0aW9uIHNxdWFyZShuKSB7CiAgICByZXR1cm4gbXVsdGlwbHkobiwgbik7Cn0KZnVuY3Rpb24gcHJpbnRSZXN1bHQobikgewogICAgdmFyIG51bWJlciA9IHNxdWFyZShuKTsKICAgIGNvbnNvbGUubG9nKG51bWJlcik7Cn0KcHJpbnRSZXN1bHQoMTApOw%3D%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
- [Stacktrace](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gdGhpcmQoKSB7CiAgICB0aHJvdyBuZXcgRXJyb3IoJ1NlZSBzdGFja3RyYWNlJyk7Cn0KZnVuY3Rpb24gc2Vjb25kKCkgewogICAgdGhpcmQoKTsKfQpmdW5jdGlvbiBmaXJzdCgpIHsKICAgIHNlY29uZCgpOwp9CmZpcnN0KCk7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D) (Ejecutar también en navegador)
- [Uncaught RangeError: Maximum call stack size exceeded](http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcmVjdXJzaXZlKCkgewogICAgcmV0dXJuIHJlY3Vyc2l2ZSgpOwp9CgpyZWN1cnNpdmUoKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)  (Ejecutar también en navegador)

# Event Loop
Ejemplo: 5_Event_loop
Ejemplo: blocking-vs-non-blocking.js

## Lecturas recomendadas para profundizar en los temas anteriores:
- [Overview of Blocking vs Non-Blocking](https://nodejs.org/es/docs/guides/blocking-vs-non-blocking/)
- [Don't Block the Event Loop (or the Worker Pool)](https://nodejs.org/es/docs/guides/dont-block-the-event-loop/)

# Crear servidor 
Ejemplo: node-example.js
Ejemplo blockear servidor: node-example.js // Descomentar blockeo

# Servidor Express 
Ejemplo: 
  express-example
  express-time-service

# Desafío
Desafío: Implementar un API REST utilizando Express.js (o Koa.js) para el ABM de un recurso “user” con la siguiente información:
  ```json
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "country": "Neverland"
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "timezone": "America/Montevideo"
  }
```

# Notas
- En carpeta principal, usar app.js cuando es una api que se expone, y sino index.js
- Nombrar las carpetas con barra baja en los espacios: _ Todo en minusculas. "my_folder"
- Para los archivos:
  - Si exportan clases entonces con camelcase: MyArchivoClase.js
  - Si exportan objectos, funciones, etc. Entonces como las clases: "my_file_anything.js"