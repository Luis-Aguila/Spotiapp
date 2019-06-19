<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
</head>
<body>
	<p align="center"><img src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/Spotify.png" alt="Logo/Imagen Proyecto" width="150px" height="150px"></p>
	<h1 align="center">SpotiApp</h1>
  <table>
    <tbody>
      <tr>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/angular.png" alt="Imagen 1">
        </td>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/html5.png" alt="Imagen 2">
        </td>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/bootstrap.png" alt="Imagen 3">
        </td>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/Spotify.png" alt="Imagen 4">
        </td>
      </tr><tr></tr>
      <tr>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/postman.png" alt="Imagen 5">
        </td>
      </tr><tr></tr>
    </tbody>
  </table>
	<h3>Introducción</h3>
  <p>SpotiApp, es un sistema que utiliza la api de Spotify para mostrar los 20 temas más escuchados de la aplicación, a su vez cuenta con un buscador, en donde se pueden realizar busquedas a los diferentes artistas y escuchar sus Top 10 de temas mas reproducidos por Spotify.</p>
  <p>Para el desarrollo de este sistema, su utilizaron las api web que proporciona la página oficial de Spotify para developer https://developer.spotify.com/documentation/web-api/, para esto es necesario seguir las instrucciones que aparecen en dicha página, una vez creado un perfil, la página proporcionara unas api web, para la autentificación de la aplicación, estas credenciales deberan ser utilizadas en Postman https://www.getpostman.com/, por lo cual una vez ingresado estos datos se realizara una solicitud POST al servicio de Spotify para generar un token de acceso, el cual deberemos de pegar en nuestro sistema, este token tiene una duración de 1 hora (3600 Segundos) y debera renovarse de panera periodica durante la etapa de desarrollo para el funcionamiento del sistema.</p>
  <p>Para este sistema, es necesario generar un servicio llamado spotify.service.ts, el cual será el intermediario entre nuestro sistema y la Api web de spotify, una vez creado, es necesario pegar el token de acceso generado por Postman en nustro servicio.</p>
  <p>Una vez creado nuestro servicio de spotify, podemos solicitar información proveniente de la api, esta información se nos cargará en dorma de arraylist de datos, para lo cual, solamente necesitamos seleccionar aquellos datos que queremos mostrar en nuestros componentes (ejemplo: artists, top-tracks, albums, etc.).</p>
  <p>Para reproducir los temas seleccionados, Spotify developer nos ofrece cargar un reproductor utilizando un iframe, haciendo referencia al url (src) de la pista seleccionada.</p>
  <h3>Información del Proyecto</h3>
  <p>Proyecto desarrollado a modo de aprendizaje en cursos guiados.</p>
	<h3>Objetivo</h3>
  <ul>
    <li>Utilizar las Api Web de Spotify.</li>
    <li>Realizar solicitudes de información a api´s mediante Postman.</li>
    <li>Desarrollar un sistema multimedia.</li>
  </ul>
	<h3>Tecnologías</h3>
  <ul>
    <li>Angular 2+</li>
    <li>Api web Spotify</li>
    <li>Postman</li>
    <li>Bootstrap</li>
  </ul>
	<h3>Componentes</h3>
  <ul>
    <li>Artista</li>
    <li>Home</li>
    <li>Search</li>
    <li>Shared</li>
    <li>Navbar</li>
    <li>Tarjetas</li>
  </ul>
	<h3>Servicios</h3>
  <ul>
    <li>spotify.service.ts</li>
  </ul>
  <p>Se utilizo un servicio para el manejo de los datos de la api de spotify.</p>
	<h3>Vistas del sistema</h3>
  <table>
    <tbody>
      <tr>
        <td align="center" valign="middle">
          <img width="300px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-proyect/SpotiApp/postman.PNG" alt="Imagen 1">
        </td>
        <td align="center" valign="middle">
          <img width="300px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-proyect/SpotiApp/service.PNG" alt="Imagen 2">
        </td>
        <td align="center" valign="middle">
          <img width="300px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-proyect/SpotiApp/index1.PNG" alt="Imagen 3">
        </td>
      </tr><tr></tr>
      <tr>
        <td align="center" valign="middle">
          <img width="300px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-proyect/SpotiApp/index2.PNG" alt="Imagen 4">
        </td>
        <td align="center" valign="middle">
          <img width="300px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-proyect/SpotiApp/busqueda.PNG" alt="Imagen 5">
        </td>
        <td align="center" valign="middle">
          <img width="300px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-proyect/SpotiApp/artista.PNG" alt="Imagen 6">
        </td>
      </tr><tr></tr>
    </tbody>
  </table>
</body>
</html>
# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
