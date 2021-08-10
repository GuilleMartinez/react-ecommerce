# Curso React JS - Coderhouse

## Acerca de este proyecto

E-commerce conformado por los distintos desafíos realizados a lo largo del curso. <br>
El objetivo de este proyecto es servir de plantilla, brindando todas las funciones básicas que tiene un sitio o aplicación de sus características que luego se puedan personalizar (tanto en diseño o extras) según las necesidades del cliente. Por esta razón, se hizo énfasis en la correcta ejecución de cada una de las funcionalidades que ofrece, agregando principios de accesibilidad para crear una aplicación que cualquier persona pueda utilizar.

<figure style="text-align: center">
   <img 
    alt="GIF animado donde se muestran algunas funcionalidades del proyecto"
    with="350" 
    height="350" 
    src="https://media.giphy.com/media/ywLGd80SUTyz3hz1k2/giphy.gif" 
  />
  <figcaption>GIF animado donde se muestran algunas funcionalidades que ofrece</figcaption>
</figure>

<hr>

## Herramientas utilizadas

Para la elaboración de este proyecto se utilizaron las siguientes herramientas:

- React JS (librería principal)
- Bulma CSS (estilos y diseño responsive).
- React Router Dom (navegación).
- Firebase (alojamiento de datos).

<hr>

## Instalación del proyecto

1. Debe clonar el repositorio utlizando _`git clone https://github.com/GuilleMartinez/react-ecommerce.git`_
2. Luego deberá instalar todas las dependencias del proyecto, para eso deberá ejecutar
   _`npm install` (también puede utilizar `npm i`)_
3. Por último, puede ejecutar el proyecto y realizar las pruebas utilizando _`npm start`_

_Si no desea instalar el proyecto, puede utilizarlo ingresando al siguiente enlace: [Proyecto en vivo](https://react-ecommerce-guillermo-martinez.netlify.app/)_

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

- Muestra un resumen de la compra a realizar junto al formulario para finalizar la transacción.
- Puede eliminar un producto en específico o bien vaciar el carrito por completo.
- Todos los datos ingresados en el formualrio serán validados previamente a enviar su pedido.
- Una vez finalizada su compra, será notificado sobre el estado de la operación.
  - En caso de que la operación falle, su carrito de compras será actualizado con los elementos que estén en stock.
  - Si la operación fue exitosa, se le brindará el número de identificación de la transacción realizada.
