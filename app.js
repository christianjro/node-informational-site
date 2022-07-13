// const http = require('http');
// const fs = require('fs');
const express = require('express')
const app = express()

app.listen(3000)

app.get('/', (req,res) => {
    res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', {root: __dirname})
})

app.get('/contact-me', (req,res) => {
    res.sendFile('./views/contact-me.html', {root: __dirname})
})

app.use((req,res) => {
    res.status(404).sendFile('./views/404.html', {root: __dirname})
})

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     let path = './views/';
//     switch(req.url) {
//         case '/': 
//             path += 'index.html';
//             res.statusCode = 200;
//             break;
//         case '/about': 
//             path += 'about.html';
//             res.statusCode = 200;
//             break;
//         case '/contact-me': 
//             path += 'contact-me.html';
//             res.statusCode = 200;
//             break;
//         default: 
//             path += '404.html';
//             res.statusCode = 404;
//             break;
//     }

//     fs.readFile(path, (err, data) => {
//         if(err) {
//             console.log(err);
//             res.end();
//         } else {
//             res.write(data);
//             res.end();
//         }
//     });
// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for requests on port 3000')
// });