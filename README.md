¿Qué sucedió al usar async y await?
Al usar async/await, el código se vuelve más legible y parece síncrono, lo que facilita la comprensión. Las funciones asincrónicas se pueden llamar de manera secuencial, y el flujo de control se detiene en las llamadas await hasta que la promesa se resuelve o rechaza. Si una promesa es resuelta, el valor resuelto se asigna a la variable. Si una promesa es rechazada, se lanzará una excepción que se puede capturar usando un bloque try-catch.

¿Qué sucedió al usar el método then()?
Usando el método then(), el código se ejecuta en forma de cadena de promesas encadenadas. Cada llamada a then() devuelve una nueva promesa que representa el resultado de la operación anterior. Esto puede hacer que el código sea un poco más difícil de leer en comparación con async/await, especialmente cuando hay múltiples operaciones encadenadas.

¿Qué diferencias encontraste entre async, await y el método then()?
Las diferencias clave son:

Legibilidad: async/await tiende a ser más legible y se parece más a un código síncrono, mientras que then() encadenado puede ser más difícil de seguir, especialmente con muchas operaciones.

Manejo de errores: En async/await, los errores se manejan mediante bloques try-catch, lo que facilita la gestión de excepciones. En then(), generalmente se utiliza el método catch() al final para manejar errores.

Devolución de valores: async/await permite una sintaxis más directa para capturar los valores resueltos de las promesas, mientras que con then() necesitas encadenar métodos then() para acceder a los valores resultantes.

En general, async/await tiende a ser la elección más natural cuando se trata de escribir código asincrónico en JavaScript moderno, ya que mejora la legibilidad y el manejo de errores.