const chalk = require('chalk');

const statsLinks = (array) => {
    const total = array.length;
    const unique = new Set(array.map((link) => link.href));
    const stats = chalk.green(`Total: ${total}`) + '\n' + chalk.yellow(`Unique: ${unique.size}`);
    return stats;
}

const brokenLinks = (array) => {
    const broken = array.filter(link => link.ok === false);
    const stats = chalk.red(`Broken: ${broken.length}`);
    return stats;
}

const noLinks = chalk.cyan(`
────────────────────────────────────────────────────██████
──────────────────────────────────────────────────██▓▓▓▓▓▓██
────────────────────────────────────────────────██▓▓▓▓▒▒▒▒██
────────────────────────────────────────────────██▓▓▒▒▒▒▒▒██
──────────────────────────────────────────────██▓▓▓▓▒▒▒▒██
───────── ▄▀█ █ ▄▀▀▀▄ ────────────────────────██▓▓▒▒▒▒▒▒██
───────── █ █ █ █   █ ──────────────────────██▓▓▓▓▒▒▒▒▒▒██
───────── █ █ █ █   █ ──────────────────────████▒▒████▒▒██
───────── █ █▄▀ ▀▄▄▄▀ ──────────────────────██▓▓▒▒▒▒▒▒▒▒██
──────────────────────────────────────────██────▒▒────▒▒██
──────────────────────────────────────────████──▒▒██──▒▒██
──────────────────────────────────────────██────▒▒────▒▒██
─ █    ▀▀█▀▀ ▄▀█ █ █  █ ▄▀▀▀▀ ────────────██▒▒▒▒▒▒▒▒▒▒▒▒██
─ █      █   █ █ █ █▄▄▀ █     ────────────████████████▒▒▒▒██
─ █      █   █ █ █ █▀▀▄  ▀▀▀▄ ──────────██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
─ █▄▄▄ ▄▄█▄▄ █ █▄▀ █  █ ▄▄▄▄▀ ────────██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒██
─────────────────────────────────────██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
──────────────────────────────────██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
────────────────────────────────██▓▓▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
─ █▀▀▀ ▄▀▀▀▄ █   █ ▄▀█ █ █▀▀▀▄ ─██▓▓▒▒▓▓▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒██
─ █    █   █ █   █ █ █ █ █   █ ─██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓██
─ █▀▀▀ █   █ █   █ █ █ █ █   █ ───████▐▌▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌▐▌████
─ █    ▀▄▄▄▀ ▀▄▄▄▀ █ █▄▀ █▄▄▄▀ ─────██▐▌▐▌▌▌▌▌▌▌▌▌▐▌▐▌▐▌▐▌▌▌▐▌██
────────────────────────────────────██▌▌▐▌▐▌▌▌▐▌▌▌▌▌▐▌▌▌▌▌▌▌▌▌██
──────────────────────────────────────██▌▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▌▌▌▌██
──────────────────────────────────────██▐▌▐▌▐▌████████▐▌▌▌▌▌██
────────────────────────────────────────██▒▒██        ██▒▒██
────────────────────────────────────────██████        ██████
`);

const noExist = chalk.cyan(`
─────────────────────────────────────────────────────────██████
───────────────────────────────────────────────────────██▓▓▓▓▓▓██
─────────────────────────────────────────────────────██▓▓▓▓▒▒▒▒██
─────────────────────────────────────────────────────██▓▓▒▒▒▒▒▒██
───────────────────────────────────────────────────██▓▓▓▓▒▒▒▒██
─ ▀▀█▀▀ █  █ █▀▀▀     █▀▀▀▄ ▄▀▀▀▄ ▀▀█▀▀ █  █ ──────██▓▓▒▒▒▒▒▒██
─   █   █  █ █        █   █ █   █   █   █  █ ────██▓▓▓▓▒▒▒▒▒▒██
─   █   █▀▀█ █▀▀▀     █▀▀▀  █▀▀▀█   █   █▀▀█ ────████▒▒████▒▒██
─   █   █  █ █▄▄▄     █     █   █   █   █  █ ────██▓▓▒▒▒▒▒▒▒▒██
───────────────────────────────────────────────██────▒▒────▒▒██
───────────────────────────────────────────────████──▒▒██──▒▒██
───────────────────────────────────────────────██────▒▒────▒▒██
── █▀▀▀▄ ▄▀▀▀▄ █▀▀▀ ▄▀▀▀▀ ▄▀█ █ █ ▀▀█▀▀ ───────██▒▒▒▒▒▒▒▒▒▒▒▒██
── █   █ █   █ █    █     █ █ █     █   ───────████████████▒▒▒▒██
── █   █ █   █ █▀▀▀  ▀▀▀▄ █ █ █     █   ─────██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
── █▄▄▄▀ ▀▄▄▄▀ █▄▄▄ ▄▄▄▄▀ █ █▄▀     █   ───██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒██
─────────────────────────────────────────██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
───────────────────────────────────────██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
─────────────────────────────────────██▓▓▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
───── █▀▀▀─█    █ ▀▀█▀▀ ▄▀▀▀▀ ▀▀█▀▀ ─██▓▓▒▒▓▓▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒██
───── █     ▀▄▄▀    █   █       █   ─██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓██
───── █▀▀▀  ▄▀▀▄    █    ▀▀▀▄   █   ───████▐▌▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌▐▌████
───── █▄▄▄ █    █ ▄▄█▄▄ ▄▄▄▄▀   █   ─────██▐▌▐▌▌▌▌▌▌▌▌▌▐▌▐▌▐▌▐▌▌▌▐▌██
─────────────────────────────────────────██▌▌▐▌▐▌▌▌▐▌▌▌▌▌▐▌▌▌▌▌▌▌▌▌██
───────────────────────────────────────────██▌▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▌▌▌▌██
───────────────────────────────────────────██▐▌▐▌▐▌████████▐▌▌▌▌▌██
─────────────────────────────────────────────██▒▒██        ██▒▒██
─────────────────────────────────────────────██████        ██████
`);

const help = chalk.bgBlack(`
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀██████
█                                                      ██▓▓▓▓▓▓██
█                NEED HELP? --help                   ██▓▓▓▓▒▒▒▒██
█                                                    ██▓▓▒▒▒▒▒▒██
█                                                   ██▓▓▓▓▒▒▒▒██
█       Enter one of the following options:        ██▓▓▒▒▒▒▒▒██
█                                                ██▓▓▓▓▒▒▒▒▒▒██
█                                                ████▒▒████▒▒██
█                                                ██▓▓▒▒▒▒▒▒▒▒██
█ --validate --stats : Show total, unique and  ██────▒▒────▒▒██
█                      broken                  ████──▒▒██──▒▒██
█                                              ██────▒▒────▒▒██
█                                              ██▒▒▒▒▒▒▒▒▒▒▒▒██
█ --stats --validate : Show total, unique and  ████████████▒▒▒▒██
█                      broken                ██▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒██
█                                          ██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒██
█                                        ██▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
█ --validate : Show href, text, file,  ██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
█               status and ok        ██▓▓▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒██
█                                    ██▓▓▒▒▓▓▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒██
█                                    ██▓▓▓▓▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓██
█   --stats : Show total and unique    ████▐▌▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▐▌▐▌████
█                                        ██▐▌▐▌▌▌▌▌▌▌▌▌▐▌▐▌▐▌▐▌▌▌▐▌██
█                                        ██▌▌▐▌▐▌▌▌▐▌▌▌▌▌▐▌▌▌▌▌▌▌▌▌██
█                                          ██▌▌▐▌▐▌▐▌▐▌▐▌▐▌▐▌▌▌▌▌██
█                                          ██▐▌▐▌▐▌████████▐▌▌▌▌▌██
█                                            ██▒▒██        ██▒▒██
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄██████        ██████
`);

module.exports = {
                    statsLinks,
                    brokenLinks,
                    noLinks,
                    noExist,
                    help
                };
