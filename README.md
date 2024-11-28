# Prueba Técnica - Cypress Test Suite

Este repositorio contiene una suite de pruebas automatizadas para evaluar el comportamiento del sitio web [DemoBlaze](https://www.demoblaze.com/) utilizando **Cypress**.

## Requisitos

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

## Instalación

Sigue estos pasos para instalar las dependencias necesarias y ejecutar las pruebas:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/ginocarnevale/stradivarius_PT
   cd stradivarius_PT
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecución de las Pruebas

### Comandos principales:

- Para ejecutar todas las pruebas en modo headless:

  ```bash
  npm run test
  ```

- Para abrir la interfaz de Cypress y seleccionar las pruebas manualmente:

  ```bash
  npm run open
  ```

### Opciones adicionales:

- Ejecutar las pruebas específicamente en Google Chrome (modo headless):

  ```bash
  npm run test_chrome
  ```

- Ejecutar las pruebas específicamente en Mozilla Firefox (modo headless):

  ```bash
  npm run test_firefox
  ```

## Estructura del Proyecto

- **cypress/e2e/**: Contiene los archivos de las pruebas.
- **cypress/support/**: Archivos de configuración y comandos personalizados.
- **cypress.config.ts**: Archivo de configuración para Cypress.

## Notas

- Las pruebas están configuradas para ejecutarse por defecto contra el entorno de desarrollo: [https://www.demoblaze.com/](https://www.demoblaze.com/).
- De ser necesario, se podrian agregar más exploradores y configurar diferentes viewports para simular diferentes tamaños de pantallas utilizando el manejo de variables en el archivo cypress.config.ts  
