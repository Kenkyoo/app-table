import {TabulatorFull as Tabulator} from 'tabulator-tables';
import tabledata from './data.json'
import './style.css'

var table = new Tabulator("#example-table", {
    data: tabledata,
    columns: [
        {title: "ID", field: "employee_id", sort: "number"},
        {title: "Name", field: "full_name", sort: "string"},
        {title: "Job Title", field: "job_title", sort: "string"},
        {title: "Department", field: "department", sort: "string"},
        {title: "Salary", field: "salary", sort: "number", formatter: "money", formatterParams: {precision: 2}}
    ],
});