document.write('<h1>Estadísticas Centro Médico Ñuñoa</h1>');

let radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

let traumatologia = [
    { hora: '08:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

let dental = [
    { hora: '08:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//Agregar código para el desafio 2 aquí

// ************************** Pregunta 1 **********************************

// Agregar horas al arreglo de Traumatología
// primero hacer unn Push y luego un sort para mostrar las horas
let nuevasHoras = [{
        hora: '09:30',
        especialista: 'MARIA SOLAR',
        paciente: 'RAMIRO ANDRADE',
        rut: '12221451-K',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'RAUL LOYOLA',
        paciente: 'CARMEN ISLA',
        rut: '10112348-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especialista: 'ANTONIO LARENAS',
        paciente: 'PABLO LOAYZA',
        rut: '13453234-1',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:00',
        especialista: 'MATIAS ARAVENA',
        paciente: 'SUSANA POBLETE',
        rut: '14345656-6',
        prevision: 'FONASA'
    }
];

// Agregar las nuevas horas al arreglo de traumatología
nuevasHoras.forEach(nueva => traumatologia.push(nueva));

// Ordenar las horas para mostrar
traumatologia.sort((a, b) => {
    if (a.hora > b.hora) {
        return 1;
    }
    if (a.hora < b.hora) {
        return -1;
    }
    // a must be equal to b
    return 0;
});
// Imprimir horas de un arreglo
const tabla = (arreglo) => {
    // Longitud del arreglo
    let arrLength = arreglo.length;
    document.write(`
    <table>
        <tr>
        <th>Hora</th>
        <th>RUT</th>
        <th>Paciente</th>
        <th>Previsión</th>
        <th>Especialista</th>
        </tr>
  `)
    for (i = 0; i < arrLength; i++) {
        document.write(`
        <tr>
            <td> ${arreglo[i].hora} </td>
            <td> ${arreglo[i].rut} </td>
            <td> ${arreglo[i].paciente} </td>
            <td> ${arreglo[i].prevision} </td>
            <td> ${arreglo[i].especialista} </td>
        </tr>
        `)
    };
    document.write(` 
    </table>
    `)
};

document.write(`<h3>Consultas Traumatología</h3>`);
tabla(traumatologia); // Impresión de contenido de tabla de traumatología

// ************************** Pregunta 2 **********************************

// Eliminar el primer y último elemento del arreglo de Radiología.
radiologia.shift() // elimina el primer elemento
radiologia.pop() // elimina el último elemento

// Imprimir nueva tabla de radiología
document.write(`<h3>Consultas Radiología</h3>`);
tabla(radiologia); // Impresión de contenido de tabla de traumatología

// ************************** Pregunta 3 **********************************

// Lista de consultas médicas de Dental
document.write(`<h3>Consultas Dental</h3>`);
let valor = [];
dental.forEach((consulta) => {

    // document.write(`<p>${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}</p>`);
    // armar arreglo simple con elementos del objeto
    let contador = 0;

    for (const atributo in consulta) {
        valor[contador] = `${consulta[atributo]}`;
        contador++;
    }
    // imprimir usando join
    document.write(`<p>${valor.join(" - ")}</p>`);
});


// ************************** Pregunta 4 **********************************

// Listado total de todos los pacientes que se atendieron en el centro médico
var nomPacientes = [];

// Crear un solo arreglo de objetos del centro medico 
nomPacientes = radiologia.concat(traumatologia);
nomPacientes = nomPacientes.concat(dental);

// Imprimir nombres de pacientes
document.write(`<h3>Total de Pacientes Atendidos</h3>`);
nomPacientes.forEach((consulta) => document.write(`<p>${consulta.paciente}</p>`));


// ************************** Pregunta 5 **********************************

// Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas de Dental

let pacienteIsapre = dental.filter((consulta) => { return consulta.prevision == 'ISAPRE' });

// Imprimir nombres de pacientes
document.write(`<h3>Pacientes de ISAPRE consultas Dental</h3>`);

// armar arreglo simple con elementos del objeto

let enIsapre = [];

pacienteIsapre.forEach((consulta) => {
    let contad = 0;

    // armar arreglo simple con elementos del objeto
    for (const propied in consulta) {
        if (propied == 'paciente' || propied == 'prevision') {
            enIsapre[contad] = `${consulta[propied]}`;
            contad++;
        };
    };
    // imprimir usando join
    document.write(`<p>${enIsapre.join(" - ")}</p>`);
});

// ************************** Pregunta 6 **********************************

// Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas de Traumatología

let pacienteFonasa = dental.filter((consulta) => { return consulta.prevision == 'FONASA' });

// Imprimir nombres de pacientes
document.write(`<h3>Pacientes de FONASA consultas de Traumatología</h3>`);

// armar arreglo simple con elementos del objeto

let enFonasa = [];

pacienteFonasa.forEach((consulta) => {
    let contFonasa = 0;

    // armar arreglo simple con elementos del objeto
    for (const propied in consulta) {
        if (propied == 'paciente' || propied == 'prevision') {
            enFonasa[contFonasa] = `${consulta[propied]}`;
            contFonasa++;
        };
    };
    // imprimir usando join
    document.write(`<p>${enFonasa.join(" - ")}</p>`);
});

document.write(`<h3>Resúmen de Atenciones</h3>`);



//Agregar código para el desafio 2 aquí

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);