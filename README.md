# App Table

Este es un proyecto simple que utiliza [Tabulator](http://tabulator.info/) para crear una tabla interactiva a partir de un archivo JSON.

## Demo

Puedes ver la aplicación en acción aquí: [App Table en Cloudflare](https://app-table.pages.dev/).

## Características

- Lee datos de un archivo JSON.
- Muestra una tabla interactiva con columnas configuradas.
- Incluye funciones de ordenamiento y formato para columnas específicas.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/Kenkyoo/app-table.git
   cd app-table

    Instala las dependencias usando npm o yarn:

    npm install

Uso
Modo de desarrollo

Para iniciar un servidor de desarrollo:

npm start

Esto abrirá la aplicación en tu navegador en http://localhost:1234.
Construcción para producción

Para generar los archivos optimizados para producción:

npm run build

Los archivos se generarán en la carpeta dist/.
Estructura del Proyecto

    index.html: Archivo principal de la interfaz.
    data.json: Datos en formato JSON que se muestran en la tabla.
    style.css: Estilos personalizados.
    index.js: Lógica para inicializar Tabulator y cargar datos.

Dependencias

Este proyecto utiliza las siguientes dependencias:

    tabulator-tables: Para generar tablas interactivas.
    parcel: Para la construcción y empaquetado.

Código de Ejemplo
Configuración de Tabulator en index.js:

import { TabulatorFull as Tabulator } from 'tabulator-tables';
import tabledata from './data.json';
import './style.css';

var table = new Tabulator("#example-table", {
    data: tabledata,
    columns: [
        { title: "ID", field: "employee_id", sort: "number" },
        { title: "Name", field: "full_name", sort: "string" },
        { title: "Job Title", field: "job_title", sort: "string" },
        { title: "Department", field: "department", sort: "string" },
        { title: "Salary", field: "salary", sort: "number", formatter: "money", formatterParams: { precision: 2 } }
    ],
});

Licencia

Este proyecto está disponible bajo la licencia MIT.
