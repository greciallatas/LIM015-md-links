const API = require('../src/index.js');

const mdLinks = (path, options = { validate: false }) => new Promise((resolve, reject) => {

    if (API.existPath(API.verifyAbsolutePath(path)) === true) {
        if (options.validate === true) {
            const getMDLinks = API.statusAllMDLinks(API.searchAllMDLinks(path));
            resolve(getMDLinks);
        }else{
            resolve(API.searchAllMDLinks(path));
        }
    } else {
        reject('The path doesn\'t exist');
    }
});

// const prueba1 = 'markDown\\path.md';
// console.log(mdLinks(prueba1, true).then((response) => console.log(response)));

const prueba2 = 'markDown\\pruebaMD\\prueba.md';
console.log(mdLinks(prueba2, true).then((response) => console.log(response)));

module.exports = { mdLinks };