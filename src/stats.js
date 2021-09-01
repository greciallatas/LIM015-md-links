const chalk = require('chalk');
const api = require('../src/index.js')

const statsLinks = (array) => {
    const total = array.length;
    const unique = new Set(array.map((link) => link.href));
    const stats = chalk.yellow(`Total: ${total}`) + '\n' + chalk.green(`Unique: ${unique.size}`);
    return stats;
}

const brokenLinks = (array) => {
    const broken = array.filter(link => link.ok === false);
    const stats = chalk.red(`Broken: ${broken.length}`);
    return stats;
}

console.log(brokenLinks([{
                            href: 'https://www.geeksforgeeks.org/file-isfile-method-in-java-with-examples/',
                            text: 'isFile()',
                            file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md',
                            ok: true
                            },
                            {
                            href: 'https://www.geeksforgeeks.org/file-isdirectory-method-in-java-with-examples/',
                            text: 'isDirectory()',
                            file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md',
                            ok: true
                            },
                            {
                            href: 'https://github.com/greciallatas/LIM015-mdlinks/blob/main/markDown/codepen.io/trending',
                            text: 'fs module Node.js',
                            file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md',
                            ok: false
                            }])
            );

const noLinks = chalk.cyan(`
──────────────────────────────────────────────────────────────██████
────────────────────────────────────────────────────────────██▓▓▓▓▓▓██
──────────────────────────────────────────────────────────██▓▓▓▓▒▒▒▒██
──────────────────────────────────────────────────────────██▓▓▒▒▒▒▒▒██
────────────────────────────────────────────────────────██▓▓▓▓▒▒▒▒██
▄▀█ █ ▄▀▀▀▄ ────────────────────────────────────────────██▓▓▒▒▒▒▒▒██
█ █ █ █   █ ──────────────────────────────────────────██▓▓▓▓▒▒▒▒▒▒██
█ █ █ █   █ ──────────────────────────────────────────████▒▒████▒▒██
█ █▄▀ ▀▄▄▄▀ ──────────────────────────────────────────██▓▓▒▒▒▒▒▒▒▒██
────────────────────────────────────────────────────██────▒▒────▒▒██
────────────────────────────────────────────────────████──▒▒██──▒▒██
────────────────────────────────────────────────────██────▒▒────▒▒██
───── █    ▀▀█▀▀ ▄▀█ █ █  █ ▄▀▀▀▀ ──────────────────██▒▒▒▒▒▒▒▒▒▒▒▒██
───── █      █   █ █ █ █▄▄▀ █     ──────────────────████████████▒▒▒▒██
───── █      █   █ █ █ █▀▀▄  ▀▀▀▄ ────────────────██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
───── █▄▄▄ ▄▄█▄▄ █ █▄▀ █  █ ▄▄▄▄▀ ──────────────██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒██
──────────────────────────────────────────────██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
────────────────────────────────────────────██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
──────────────────────────────────────────██▓▓▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
─────────── █▀▀▀ ▄▀▀▀▄ █   █ ▄▀█ █ █▀▀▀▄ ─██▓▓▒▒▓▓▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒██
─────────── █    █   █ █   █ █ █ █ █   █ ─██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓██
─────────── █▀▀▀ █   █ █   █ █ █ █ █   █ ───████▐▌▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌▐▌████
─────────── █    ▀▄▄▄▀ ▀▄▄▄▀ █ █▄▀ █▄▄▄▀ ─────██▐▌▐▌▌▌▌▌▌▌▌▌▐▌▐▌▐▌▐▌▌▌▐▌██
──────────────────────────────────────────────██▌▌▐▌▐▌▌▌▐▌▌▌▌▌▐▌▌▌▌▌▌▌▌▌██
────────────────────────────────────────────────██▌▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▌▌▌▌██
────────────────────────────────────────────────██▐▌▐▌▐▌████████▐▌▌▌▌▌██
──────────────────────────────────────────────────██▒▒██        ██▒▒██
──────────────────────────────────────────────────██████        ██████
`);

const noExist = chalk.cyan(`
──────────────────────────────────────────────────────────────██████
────────────────────────────────────────────────────────────██▓▓▓▓▓▓██
──────────────────────────────────────────────────────────██▓▓▓▓▒▒▒▒██
──────────────────────────────────────────────────────────██▓▓▒▒▒▒▒▒██
────────────────────────────────────────────────────────██▓▓▓▓▒▒▒▒██
▀▀█▀▀ █  █ █▀▀▀     █▀▀▀▄ ▄▀▀▀▄ ▀▀█▀▀ █  █ ─────────────██▓▓▒▒▒▒▒▒██
  █   █  █ █        █   █ █   █   █   █  █ ───────────██▓▓▓▓▒▒▒▒▒▒██
  █   █▀▀█ █▀▀▀     █▀▀▀  █▀▀▀█   █   █▀▀█ ───────────████▒▒████▒▒██
  █   █  █ █▄▄▄     █     █   █   █   █  █ ───────────██▓▓▒▒▒▒▒▒▒▒██
────────────────────────────────────────────────────██────▒▒────▒▒██
────────────────────────────────────────────────────████──▒▒██──▒▒██
────────────────────────────────────────────────────██────▒▒────▒▒██
─── █▀▀▀▄ ▄▀▀▀▄ █▀▀▀ ▄▀▀▀▀ ▄▀█ █ █ ▀▀█▀▀ ───────────██▒▒▒▒▒▒▒▒▒▒▒▒██
─── █   █ █   █ █    █     █ █ █     █   ───────────████████████▒▒▒▒██
─── █   █ █   █ █▀▀▀  ▀▀▀▄ █ █ █     █   ─────────██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
─── █▄▄▄▀ ▀▄▄▄▀ █▄▄▄ ▄▄▄▄▀ █ █▄▀     █   ───────██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒██
──────────────────────────────────────────────██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
────────────────────────────────────────────██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
──────────────────────────────────────────██▓▓▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
────── █▀▀▀─█    █ ▀▀█▀▀ ▄▀▀▀▀ ▀▀█▀▀ ─────██▓▓▒▒▓▓▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒██
────── █     ▀▄▄▀    █   █       █   ─────██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓██
────── █▀▀▀  ▄▀▀▄    █    ▀▀▀▄   █   ───────████▐▌▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌▐▌████
────── █▄▄▄ █    █ ▄▄█▄▄ ▄▄▄▄▀   █   ─────────██▐▌▐▌▌▌▌▌▌▌▌▌▐▌▐▌▐▌▐▌▌▌▐▌██
──────────────────────────────────────────────██▌▌▐▌▐▌▌▌▐▌▌▌▌▌▐▌▌▌▌▌▌▌▌▌██
────────────────────────────────────────────────██▌▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▌▌▌▌██
────────────────────────────────────────────────██▐▌▐▌▐▌████████▐▌▌▌▌▌██
──────────────────────────────────────────────────██▒▒██        ██▒▒██
──────────────────────────────────────────────────██████        ██████
`);

const help = chalk.bgBlack(`
────────────────────────────────────────────────────────────██████
──────────────────────────────────────────────────────────██▓▓▓▓▓▓██
────────────────────────────────────────────────────────██▓▓▓▓▒▒▒▒██
▄▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄───────────────██▓▓▒▒▒▒▒▒██
█                                       █─────────────██▓▓▓▓▒▒▒▒██
█                --help                 █─────────────██▓▓▒▒▒▒▒▒██
█                                       █───────────██▓▓▓▓▒▒▒▒▒▒██
█                                       █───────────████▒▒████▒▒██
█                                       █───────────██▓▓▒▒▒▒▒▒▒▒██
█                                       █─────────██────▒▒────▒▒██
█                                       █─────────████──▒▒██──▒▒██
█                                       █─────────██────▒▒────▒▒██
█                                       █─────────██▒▒▒▒▒▒▒▒▒▒▒▒██
█                                       █─────────████████████▒▒▒▒██
█                                       █───────██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
█                                       █─────██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒██
█                                       █───██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
█                                       █─██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
█                                       ██▓▓▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
█                                       ██▓▓▒▒▓▓▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒██
█                                       ██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓██
█                                       █─████▐▌▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌▐▌████
█                                       █───██▐▌▐▌▌▌▌▌▌▌▌▌▐▌▐▌▐▌▐▌▌▌▐▌██
█                                       █───██▌▌▐▌▐▌▌▌▐▌▌▌▌▌▐▌▌▌▌▌▌▌▌▌██
▀▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▀─────██▌▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▌▌▌▌██
──────────────────────────────────────────────██▐▌▐▌▐▌████████▐▌▌▌▌▌██
────────────────────────────────────────────────██▒▒██        ██▒▒██
────────────────────────────────────────────────██████        ██████
`);

module.exports = {
                    statsLinks,
                    brokenLinks,
                    noLinks,
                    noExist,
                    help
                };
