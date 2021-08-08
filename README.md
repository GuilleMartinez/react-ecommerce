# Curso React JS - Coderhouse

## Acerca de este proyecto

Este proyecto está conformado por los distintos desafíos entregables, con el objetivo de poner en práctica
todos los conocimientos adquiridos a lo largo del curso.

<hr>

## Herramientas utilizadas

Para la elaboración de este proyecto se utilizaron las siguientes herramientas:

- Bulma CSS (estilos y diseño responsive).
- React Router Dom (navegación).
- Firebase (alojamiento de datos).

<hr>

## Instalación del proyecto

En primer lugar, debe clonar el repositorio utlizando el siguiente comando:

### `git clone https://github.com/GuilleMartinez/react-ecommerce.git`

Luego deberá instalar todas las dependencias del proyecto, para eso deberá ejecutar:

### `npm install` (también puede utilizar `npm i`)

Por último, puede ejecutar el proyecto y realizar las pruebas utilizando:

### `npm start`

<hr>

## Secciones del proyecto y funcionalidades

### Barra de navegación

- Permite navegar entre las distintas categorías, filtrando los productos correspondientes.
- Muestra cuántos productos se han agregado al carrito de compras.

### Sección principal

- Muestra los productos filtrados por categorías o en su defecto, todos los productos.
- Puede usar el buscador para una rápida consulta de algún producto en específico. Si no existe, será notificado.
- Al hacer clic en el botón "see details" de cualquier producto, será dirigido a la sección de detalles.

### Sección de detalles

- Muestra información extendida del producto buscado o seleccionado.
- Puede seleccionar la cantidad que desea comprar, validada por la cantidad en stock.
- Una vez confirmado su pedido, puede añadirlo al carrito. Será redireccionado al carrito de compras.
- En caso de necesitar editar su pedido, puede volver a editarlo haciendo clic en "update your order".

### Carrito de compras

- Muestra un resumen de la compra a realizar junto al formulario para finalizar su compra.
- Puede eliminar un producto en específico o bien vaciar el carrito por completo.
- Todos los datos ingresados en el formualrio serán validados previamente a enviar su pedido.
- Una vez finalizada su compra, será notificado sobre el estado de la operación.
  - En caso de que la operación falle, su carrito de compras será actualizado con los elementos que estén en stock.
  - Si la operación fue exitosa, se le brindará el número de identificación de la transacción realizada.
