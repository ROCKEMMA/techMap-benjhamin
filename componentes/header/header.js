let header = document.createElement('div');
header.classList.add('header');

let titulo = document.createElement('p');
let tituloTexto = document.createTextNode('TechMap');
titulo.appendChild(tituloTexto);
header.appendChild(titulo);

let opciones = document.createElement('div');
opciones.classList.add('opciones');

let opcionesTexto = ['SSD', 'RAM', 'HDD', 'GPU', 'CPU', 'FUENTE DE PODER', 'PLACA MADRE'];
opcionesTexto.forEach(function(texto) {
    let opcion = document.createElement('p');
    opcion.textContent = texto;
    opciones.appendChild(opcion);
});

header.appendChild(opciones);

let divboton = document.createElement('div');
let boton = document.createElement('button');
boton.classList.add('botongit');

let enlace = document.createElement('a');
enlace.href = 'https://github.com/ROCKEMMA/techMap-benjhamin';
enlace.textContent = 'GITHUB';

boton.appendChild(enlace);
divboton.appendChild(boton);
header.appendChild(divboton);



document.body.appendChild(header);



export {header}