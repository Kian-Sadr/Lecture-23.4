const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/style.css'){
        res.writeHead(200, {'Content-Type': 'text/css'});
        let css_file = fs.readFileSync('style.css');
        res.write(css_file);
        res.end();
    } else if (req.url === '/script.js'){
        res.end(fs.readFileSync('script.js'))
    } else if(req.utl.startsWith("/mkdir/")){
        const name = req.url.split('/')[2];
        fs.mkdir(name, (error) =>{
            res.end(error ? "Error: " + error.message : "Folder " + name + " made.");
        });
    }
    } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(fs.readFileSync('index.html'));
    }
});

server.listen(process.env.PORT || 3000);
