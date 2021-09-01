const mdLinks = require('../src/index.js');


describe('Exist Path', () => {

  it('should return true if the path exist', () => {
    let path = mdLinks.existPath('./markDown');

    expect(path).toBe(true);
  });

  it('should return false if the path isn`t exist', () => {
    let path = mdLinks.existPath('./markDow');

    expect(path).toBe(false);
  });
});

describe('Directory', () => {

  it('should return true if the path is directory', () => {
    let path = mdLinks.directory('./markDown');

    expect(path).toBe(true);
  });

  it('should return false if the path isn`t directory', () => {
    let path = mdLinks.directory('./README.md');

    expect(path).toBe(false);
  });
});

describe('Read directory', () => {

  it('should return files of directory', () => {
    let path = mdLinks.readDirectory('./markDown');

    let result = ["hola.txt", "path.md", "pruebaMD"];
    expect(path).toEqual(result);
  });
});

describe('Get all  files Markdown', () => {
  it('should return files markdown of directory', () => {
    let path = mdLinks.getAllMDFiles('./markDown');

    let result = [
                    'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\path.md',
                    'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md',
                    'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba2\\prueba2.md'
                  ];

    expect(path).toEqual(result);
  });
});

describe('Search all MD Links', () => {
  it('should return href, text, file of file markdown', () => {
    let path = mdLinks.searchAllMDLinks('C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD');

    let result = [
                  {
                    href: 'https://www.geeksforgeeks.org/file-isfile-method-in-java-with-examples/',
                    text: 'isFile()',
                    file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md'
                  },
                  {
                    href: 'https://www.geeksforgeeks.org/file-isdirectory-method-in-java-with-examples/',
                    text: 'isDirectory()',
                    file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md'
                  },
                  {
                    href: 'https://www.youtube.com/watch?v=a6dRdt',
                    text: 'fs module Node.js',
                    file: 'C:\\Users\\greci\\Documents\\labProjects\\LIM015-md-links\\markDown\\pruebaMD\\prueba.md'
                  }
                ];
    expect(path).toStrictEqual(result);
  })
})