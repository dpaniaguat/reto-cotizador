# Rama a utilizar

Hay 2 ramas en este proyecto: main y Dev.
La rama a utilizar es:

## Dev



## Instalar librerias en el proyecto:

### `react-hook-form`
Lo use para agilizar la creación del formulario, obtener la información y almacenarla en un objeto y además permite hacer directamente las validaciones.

### `react-router-dom`
Lo use para el tema de enrutamiento, creando componentes como público y privado, donde este ultimo solo se podrá acceder si es que se completa el paso nro1 que en este caso es el login.

### `axios`
Lo use por comodidad, rapidez, creando un componente reutilizable para las peticiones http.

## División de componentes:

## `Pages`
    Componentes principales, las cuales contendrán en algunos casos los "organísmos" y "microcomponentes".
    
## `Organismos`
    Componentes secundarios, que abarcan una funcionalidad específica.
    
## `Microcomponentes`
    Componentes reutilizables, un botón, un título dinámico, etc.
    
# Detalles:

Proyecto creado con la última versión de react basada en un template con `TypeScript`, uso de `Hooks`personalizados, manejo de listas, arrays, tipados, interfaces,
`desestructuración de objetos`.

Para el tema del `Login`, estoy usando una Api que desarrolle en .net core 3.1 c#. esta dispone de 2 endpoints: 
### POST /cotizacion
### GET /cotizacion/{id}
si el DNI existe, devolvera la información que se almacenara en un localStorage, de lo contrario, lo registrara en la bd(sql server). en ambos casos, al obtener la información del usuario, redireccionará a la siguiente página, respetando el SPA.
