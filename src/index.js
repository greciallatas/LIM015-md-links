// Módulo path proporciona una gran cantidad de funcionalidades muy útiles para acceder e interactuar con el sistema de archivos.
const path = require('path');

// Módulo fs permite interactuar con el sistema de archivos de una manera modelada en funciones POSIX estándar.
// POSIX (Portable Operating System Interface)
const fs = require('fs');

const fetch = require('node-fetch');

// const showdown = require('showdown');
// const convert = new showdown.Converter();


const existPath = (route) => fs.existsSync(route); // Verifica si la ruta existe, true or false

const verifyAbsolutePath = (route) => (
    //Retorna un booleano: true or false
    path.isAbsolute(route) ? route : path.resolve(route)
);

// const file = (route) => fs.statSync(route).isFile(); // Verificar si el archivo existe,

const readFile = (route) => fs.readFileSync(route, 'utf8');

const directory = (route) => fs.statSync(route).isDirectory(); // Verificar si el archivo exist

const readDirectory = (route) => fs.readdirSync(route); // Lee la ruta que se ingresa

const getAllMDFiles = (route) => { // Se obtienen todos los archivos .md
    let arrayFile = [];

    if (directory(route)) {
        return readDirectory(route).reduce((accumulator, currentValue) => {
            const newAbsolutePath = path.join(route, currentValue);
            const recursive = getAllMDFiles(newAbsolutePath);
            return accumulator.concat(recursive);
        }, []);
    }else if(path.extname(route) === '.md'){
        arrayFile.push(route);
    }
    return arrayFile;
}

const searchAllMDLinks = (route) => { // Se obtienen todos los links de un archivo .md
    const arrayLinks = [];

    const pathAbsolute = verifyAbsolutePath(route);

    getAllMDFiles(pathAbsolute).forEach((archive) => {

        const regexr = /\[(.*)\]\((https*?:([^"')\s]+))\)/gi;
        const regexrLink = /https*?:([^"')\s]+)/mg;
        const regexrText = /\[(.*)\]/gi;

        const file = readFile(archive).match(regexr);

        if (file) {
            file.forEach((links) => {
                const link = links.match(regexrLink).join();
                const text = links.match(regexrText).join().slice(1, -1);

                arrayLinks.push({
                    text: text,
                    href: link,
                    file: archive,
                })
            })
        }
    });
    return arrayLinks;
}

const statusAllMDLinks = (arrayMDLinks) => {
    const links = arrayMDLinks.map((mdLink) => fetch(mdLink.href)
    .then((response) => {
        if (response.ok) {
            return {
                ...mdLink,
                status: response.status,
                message: response.statusText,
            }
        }
    })
    .catch(() => {
        return {
            ...mdLink,
            status: 404,
            message: 'FAIL',
        }
    }));
    return Promise.all(links);
};

// console.log(getAllMDFiles('./markDown'));
// console.log(searchAllMDLinks('./markDown'));
// const prueba = searchAllMDLinks('./markDown');
// console.log(prueba);
// console.log(statusAllMDLinks(prueba));

module.exports = {
                    existPath,
                    verifyAbsolutePath,
                    directory,
                    readDirectory,
                    getAllMDFiles,
                    searchAllMDLinks,
                    statusAllMDLinks
                };