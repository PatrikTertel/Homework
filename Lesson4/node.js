const fs = require('fs-extra');

fs.ensureDirSync('FirstFolder');

fs.ensureFileSync('FirstFolder/file');

fs.ensureDirSync('SecondFolder');

fs.moveSync('FirstFolder/file', 'SecondFolder/file', { overwrite: true });

fs.ensureDirSync('ThirdFolder');

fs.copyFileSync('SecondFolder/file', 'ThirdFolder/file');

fs.removeSync('SecondFolder/file');

fs.removeSync('ThirdFolder/file');

fs.removeSync('FirstFolder');

fs.removeSync('SecondFolder');

fs.removeSync('ThirdFolder');