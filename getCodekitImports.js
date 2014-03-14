function getCodekitImports(file) {
    var fs = require('fs');
    var files = [];
    if (!fs.existsSync(file)) return files;

    var folder = file.match('.+\/');
    folder = (folder[0] == undefined) ? './' : folder[0];

    var fileData = fs.readFileSync(file, 'UTF-8');
    var pattern = /(?:@codekit-append \")(.*?)(?:\")/g;
    while (foo = pattern.exec(fileData)) files.push(folder + foo[1]);

    return files;
}