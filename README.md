# sise_parametrizacion
ETL para inicialización de variables necesarias para el funcionamiento de el módulo de actualización de datos del Sistema de información y seguimiento al egresado SISE ([sise_cliente](https://github.com/udistrital/sise_cliente/tree/develop))

Opciones para generar variables:
- Tienes opción para generar variables basado en un arreglo de strings definido internamente en el código (La mas usada)
- Tienes opción para generar una a una las variables

## Especificaciones Técnicas
### Tecnologías Implementadas y Versiones
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
* [HTML](https://developer.mozilla.org/es/docs/Web/HTML)
* [Bootstrap](https://getbootstrap.com/docs/5.0)

### Variables de Entorno
```shell
# Las variables de entorno por defecto están en un etiqueta script dentro del html en una variable llamada "variables" de tipo arreglo
variables: Variables por defecto para el SISE sise_cliente
AWS_SECRET_ACCESS_KEY: Secreto de Usuario AWS
```

### Ejecución del Proyecto

Clonar el proyecto del repositorio de git
```bash
# clone the project
git clone https://github.com/udistrital/sise_parametrizacion.git
# enter the project directory
cd sise_parametrizacion
```
Iniciar el html en local con live server extension de vscode
click derecho en el html y seleccionar "Open with Live Server"

# Configurar token de autorización
- Se debe ejecutar que pueda generar access_token para apis de producción de terceros[sise_cliente](https://github.com/udistrital/sise_cliente/tree/develop) e iniciar sesión exitosamente.

- Se debe copiar y pegar el access_token de producción para terceros del navegador en la parte de almacenamiento local del devtools con el proyecto sise_cliente en ejecución y se debe pegar en el campo "Ingrese token" del input del ETL

- Luego se debe hacer clic en el botón en Generar todas las variables definidas internamente

- Se espera a que cargue (3 minutos aprox.)
- Debería generar un link el cuál al dar clic descarga un .txt con un objeto que se debe copiar y reemplazar por el que esta en environment.ts del proyecto [sise_cliente](https://github.com/udistrital/sise_cliente/tree/develop)

### Ejecución Dockerfile
```bash
# Does not apply
```
### Ejecución docker-compose
```bash
# Does not apply
```
### Ejecución Pruebas

Pruebas unitarias powered by Jest
```bash
# Does not apply
```

## Estado CI

| Develop | Relese 0.0.1 | Master |
| -- | -- | -- |
| [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/sise_parametrizacion/status.svg?ref=refs/heads/develop)](https://hubci.portaloas.udistrital.edu.co/udistrital/sise_parametrizacion) | [![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/sise_parametrizacion/status.svg?ref=refs/heads/release/0.0.1)](https://hubci.portaloas.udistrital.edu.co/udistrital/sise_parametrizacion) | Copied
[![Build Status](https://hubci.portaloas.udistrital.edu.co/api/badges/udistrital/sise_parametrizacion/status.svg)](https://hubci.portaloas.udistrital.edu.co/udistrital/sise_parametrizacion) |

## Licencia

[This file is part of sise_parametrizacion.](LICENSE)

sise_parametrizacion is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (atSara Sampaio your option) any later version.

sise_parametrizacion is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with sise_parametrizacion. If not, see https://www.gnu.org/licenses/.
