// Módulo path proporciona una gran cantidad de funcionalidades muy útiles para acceder e interactuar con el sistema de archivos.
const path = require('path');

// Módulo fs permite interactuar con el sistema de archivos de una manera modelada en funciones POSIX estándar.
// POSIX (Portable Operating System Interface)
const fs = require('fs');

const fetch = require('node-fetch');

const existPath = (route) => fs.existsSync(route); // Verifica si la ruta existe, true or false

const convertAbsolutePath = (route) => (
    //Retorna un booleano: true or false
    path.isAbsolute(route) ? route : path.resolve(route)
);

const readFile = (route) => fs.readFileSync(route, { encoding: "utf-8", flag: "r" }); // Lee archivos

const directory = (route) => fs.statSync(route).isDirectory(); // Verificar si es directorio

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
        const pathAbsolute = convertAbsolutePath(route);
        arrayFile.push(pathAbsolute);
    }
    return arrayFile;
}

const searchAllMDLinks = (route) => { // Se obtienen todos los links de un archivo .md
    const arrayLinks = [];

    getAllMDFiles(route).forEach((archive) => {

        const regexr = /\[(.*)\]\((https*?:([^"')\s]+))\)/gi;
        const regexrLink = /https*?:([^"')\s]+)/mg;
        const regexrText = /\[(.*)\]/gi;

        const file = readFile(archive).match(regexr);

        if (file !== null) {

            file.forEach((links) => {

                const link = links.match(regexrLink).join();
                const text = links.match(regexrText).join().slice(1, -1);

                arrayLinks.push({
                    href: link,
                    text: text,
                    file: archive,
                })
            })
        }
    });
    return arrayLinks;
}

const statusAllMDLinks = (arrayMDLinks) => {
    const links = arrayMDLinks.map((mdLink) => {

        return fetch(mdLink.href)
        .then((response) => {
            const mesaggeText = response.status == 200 ? response.ok : false;

            return {
                ...mdLink,
                status: response.status,
                ok: mesaggeText,
            };
        })
        .catch(() => {
            return {
                ...mdLink,
                status: 404,
                ok: false,
            };
        });
    });
    return links;
};

module.exports = {
                    existPath,
                    convertAbsolutePath,
                    readFile,
                    directory,
                    readDirectory,
                    getAllMDFiles,
                    searchAllMDLinks,
                    statusAllMDLinks
                };
