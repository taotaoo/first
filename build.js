
const fs = require('fs')
const path = require('path')

fs.readdir('./markdown', function(error, files) {
    for (var i = 0; i < files.length; i++) {
        var p = path.join('./markdown', files[0])
        var content = fs.readFileSync(p).toString()
        var template = fs.readFileSync('./template.html').toString()
        var result = template.replace('%content%', content)
        fs.writeFileSync(files[0] + ".html", result)
    }
})
