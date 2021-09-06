const {statsLinks, brokenLinks, help, noLinks} = require('../src/stats.js');
const {mdLinks} = require('../src/md-links.js');

const process = require('process');

const path = process.argv[2];
const options = process.argv.slice(2);

const validate = options.includes('--validate');
const stats = options.includes('--stats');

if (path === '--help') {
    return console.log(help);
}

if (options.length === 0){
    mdLinks(path, {validate:false})
    .then((response) => {
        console.log(response);
    })
    .catch((reject)=>{
            console.log(reject);
    })
}else {
    if (validate && stats){
        mdLinks(path, {validate:true, stats:true})
        .then((response) =>{
            console.log(statsLinks(response) + '\n' + brokenLinks(response));
        })
        .catch(() => {
            console.log(noLinks);
        })
    }else if (validate){
        mdLinks(path, {validate:true})
        .then((response) => {
            console.log(response);
        })
        .catch(() => {
            console.log(noLinks);
        })
    }else if(stats){
        mdLinks(path, {stats:true})
        .then((response) => {
            console.log(statsLinks(response));
        })
        .catch(() => {
            console.log(noLinks);
        })
    }else {
        mdLinks(path, {validate:true})
        .then(console.log(help))
        .catch(() => {
            console.log(noLinks);
        })
    }
}
