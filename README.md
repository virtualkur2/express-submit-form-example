# Ejemplo de envío de formulario web hacia Servidor Express

El Servidor Express se levanta en el puerto 3000, y sirve un formulario al acceder
a la ruta raíz:

    http://localhost:3000/

Cuando el formulario es enviado, el servidor responde con un `array` de objetos que
se va incrementando a medida que se van recibiendo datos en cada envío del formulario.

**Uso básico**

Se puede iniciar el servidor desde la carpeta raíz del proyecto escribiendo:

    node src/index.js

También se puede correr el `script` de `npm` escribiendo:

    npm run dev
