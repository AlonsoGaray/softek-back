# REST API usando Serverless(Lambda) + Express/NodeJs + DynamoDb + Swagger - Reto tecnico de Softek

<details>
  <summary>Tablero de contenido</summary>
  <ol>
    <li>
      <a href="#acerca-del-proyecto">Acerca del proyecto</a>
      <ul>
        <li><a href="#creado-con">Creado con</a></li>
      </ul>
    </li>
    <li>
      <a href="#levantar-proyecto">Levantar proyecto localmente</a>
      <ul>
        <li><a href="#pasos">Pasos</a></li>
      </ul>
    </li>
    <li>
      <a href="#pasos-despliegue">Pasos para deesplegar a produccion:</a>
    </li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Acerca del proyecto

![alt text](https://raw.githubusercontent.com/AlonsoGaray/softek-back/main/src/assets/Proyecto.png)

Proyecto realizado para el reto tecnico de la empresa Softek. Tuvo una duracion de 3 dias maximo para entrega.

### Creado con

Lista de frameworks y librerias que fueron usados para el proyecto:

- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [Serverless](https://www.serverless.com/)
- [aws-sdk](https://aws.amazon.com/sdk-for-javascript/) -> Para establecer conexion con DynamoDb
- [axios](https://axios-http.com/) -> Para realizar llamados a SWAPI
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) -> Para generar la configuracion de OpenApi
- [uuid](https://www.npmjs.com/package/uuid) -> Para generar ids unicos
- [Typescript](https://www.typescriptlang.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Levantar proyecto

1. Clonar repositorio
   ```sh
   git clone https://github.com/AlonsoGaray/softek-back.git && cd softek-back
   ```
2. Instalar todos los paquetes necesarios
   ```sh
   npm install
   ```
3. Crear 2 tablas en DynamoDb.

4. Crear archivo .env en la ruta del proyecto y agregar lo indicado en el .env.example

### Pasos para local

1. Opcion 1: Levantar app y swagger localmente:
   ```sh
   npm run swagger
   ```
2. Entrar a la siguiente url para visualizar swagger y testear endpoints
   ```url
   http://localhost:8080/api-docs/#/
   ```
3. Opcion 2: Levantar serverless local sin swagger
   ```sh
   npm run offline
   ```
4. Testear endpoints con la siguiente url
   ```url
   http://localhost:3000/dev
   ```

### Pasos para deesplegar a produccion:

1. Ejecutar el comando
   ```sh
   npm run deploy
   ```
2. Empieza a testear endpoints con tu url

#### Opcional:

1. Una vez desplegado el proyecto a aws:
   ```
   Cambie en todo el proyecto la variable CAMBIAR_URL por su url de prod
   ```
2. Entrar a la siguiente url para visualizar swagger y testear endpoints
   ```url
   http://localhost:8080/api-docs/#/
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Contacto

Alonso Garay - alonsogarayp@gmail.com

Backend Github Link: [https://github.com/AlonsoGaray/softek-back](https://github.com/AlonsoGaray/softek-back)

<p align="right">(<a href="#top">back to top</a>)</p>
