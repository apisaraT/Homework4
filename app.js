const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        fs.readFile('./public/index.html', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/gallery.html') {
        fs.readFile('./public/gallery.html', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/contact.html') {
        fs.readFile('./public/contact.html', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/port.html') {
        fs.readFile('./public/port.html', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/index.html') {
        fs.readFile('./public/index.html', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/hw.js') {
        fs.readFile('./public/hw.js', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        });
    } else if (req.url === '/elements') {
        fs.readFile('./public/elements.html', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/generic') {
        fs.readFile('./public/generic.html', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/images/cat1.jpg') {
        fs.readFile('./public/images/cat1.jpg', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpeg' });
            res.end(content);
        });
    } else if (req.url === '/images/cat2.jpg') {
        fs.readFile('./public/images/cat2.jpg', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpeg' });
            res.end(content);
        });
    } else if (req.url === '/images/cat3.jpg') {
        fs.readFile('./public/images/cat3.jpg', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpeg' });
            res.end(content);
        });
    } else if (req.url === '/images/cat4.jpg') {
        fs.readFile('./public/images/cat4.jpg', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpeg' });
            res.end(content);
        });
    } else if (req.url === '/images/cat5.jpg') {
        fs.readFile('./public/images/cat5.jpg', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/jpeg' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/jquery.min.js') {
        fs.readFile('./public/assets/js/jquery.min.js', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/jquery.scrollex.min.js') {
        fs.readFile('./public/assets/js/jquery.scrollex.min.js', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/jquery.scrolly.min.js') {
        fs.readFile('./public/assets/js/jquery.scrolly.min.js', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/browser.min.js') {
        fs.readFile('./public/assets/js/browser.min.js', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/breakpoints.min.js') {
        fs.readFile('./public/assets/js/breakpoints.min.js', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/util.js') {
        fs.readFile('./public/assets/js/util.js', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        });
    } else if (req.url === '/assets/js/main.js') {
        fs.readFile('./public/assets/js/main.js', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/javascript' });
            res.end(content);
        });
    } else if (req.url === '/assets/css/main.css') {
        fs.readFile('./public/assets/css/main.css', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        });
    } else if (req.url === '/assets/css/font-awesome.min.css') {
        fs.readFile('./public/assets/css/font-awesome.min.css', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        });
    } else if (req.url === '/assets/css/noscript.css') {
        fs.readFile('./public/assets/css/nonscript.css', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        });
    } else if (req.url === '/assets/css/images/intro.svg') {
        fs.readFile('./public/assets/css/images/intro.svg', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'image/svg+xml' });
            res.end(content);
        });

    } else if (req.url === '/assets/fonts/fontawesome-webfont.eot') {
        fs.readFile('./public/assets/fonts/fontawesome-webfont.eot', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/font' });
            res.end(content);
        });
    } else if (req.url === '/assets/fonts/fontawesome-webfont.svg') {
        fs.readFile('./public/assets/fonts/fontawesome-webfont.svg', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/font' });
            res.end(content);
        });
    } else if (req.url === '/assets/fonts/fontawesome-webfont.ttf') {
        fs.readFile('./public/assets/fonts/fontawesome-webfont.ttf', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/font' });
            res.end(content);
        });
    } else if (req.url === '/assets/fonts/fontawesome-webfont.woff?v=4.7.0') {
        fs.readFile('./public/assets/fonts/fontawesome-webfont.woff', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/font' });
            res.end(content);
        });
    } else if (req.url === '/assets/fonts/fontawesome-webfont.woff2?v=4.7.0') {
        fs.readFile('./public/assets/fonts/fontawesome-webfont.woff2', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/font' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/bass/_page.scss') {
        fs.readFile('./public/assets/sass/bass/_page.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/bass/_reset.scss') {
        fs.readFile('./public/assets/sass/bass/_reset.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/bass/_typography.scss') {
        fs.readFile('./public/assets/sass/bass/_typography.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_actions.scss') {
        fs.readFile('./public/assets/sass/components/_actions.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_box.scss') {
        fs.readFile('./public/assets/sass/components/_box.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_button.scss') {
        fs.readFile('./public/assets/sass/components/_button.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_contact.scss') {
        fs.readFile('./public/assets/sass/components/_contact.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_features.scss') {
        fs.readFile('./public/assets/sass/components/_features.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_form.scss') {
        fs.readFile('./public/assets/sass/components/_form.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_icon.scss') {
        fs.readFile('./public/assets/sass/components/_icon.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_icons.scss') {
        fs.readFile('./public/assets/sass/components/_icons.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_image.scss') {
        fs.readFile('./public/assets/sass/components/_image.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_list.scss') {
        fs.readFile('./public/assets/sass/components/_list.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_menu.scss') {
        fs.readFile('./public/assets/sass/components/_menu.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_row.scss') {
        fs.readFile('./public/assets/sass/components/_row.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_section.scss') {
        fs.readFile('./public/assets/sass/components/_section.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_split.scss') {
        fs.readFile('./public/assets/sass/components/_split.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_spotlights.scss') {
        fs.readFile('./public/assets/sass/components/_spotlights.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_table.scss') {
        fs.readFile('./public/assets/sass/components/_table.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_wrapper.scss') {
        fs.readFile('./public/assets/sass/components/_wrapper.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/components/_wrapper.scss') {
        fs.readFile('./public/assets/sass/components/_wrapper.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/libs/main.scss') {
        fs.readFile('./public/assets/sass/libs/main.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else if (req.url === '/assets/sass/libs/noscript.scss') {
        fs.readFile('./public/assets/sass/libs/noscript.scss', (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/scss' });
            res.end(content);
        });
    } else {
        fs.readFile('./public/404.html', (err, content) => {
            if (err) throw err;
            res.writeHead(404, { 'content-type': 'text/html' });
            res.end(content);
        });

    }
})


const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});