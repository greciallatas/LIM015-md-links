#!/usr/bin/env node

const {statsLinks, brokenLinks, help} = require('../src/stats.js');
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
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((reject)=>{
            console.log(reject);
    })
}else {
    if (validate && stats){
        mdLinks(path, {validate:true, stats:true})
        .then((resolve) =>{
            console.log(statsLinks(resolve) + '\n' + brokenLinks(resolve));
        })
        .catch((reject) => {
            console.log(reject);
        })
    }else if (validate){
        mdLinks(path, {validate:true})
        .then((resolve) => {
            console.log(resolve);
        })
        .catch((reject) => {
            console.log(reject);
        })
    }else if(stats){
        mdLinks(path, {stats:true})
        .then((resolve) => {
            console.log(statsLinks(resolve));
        })
        .catch((reject) => {
            console.log(reject);
        })
    }else {
        mdLinks(path, {validate:true})
        .then(console.log(help))
        .catch(() => {
            console.log('help');
        })
    }
}
