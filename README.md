## Lista de tareas por hacer

Esta aplicación crea por consola tareas por hacer. También lista los elementos que hay, los edita, los borra y filtra el listado con elementos acabados.

Lo primero es hacer 
```
npm install
```

## Comandos disponibles
```
node app listar
```
```
node app filtrar -c true
```
```
node app actualizar -d "descripción de la tarea a editar" -c true/false
```
```
node app crear -d "descripcioón de la tarea" -c true/false
```
```
node app borrar -d "descripción del elemento a borrar"
```