let express = require('express');
let fs = require('fs');
let app = express();
let formidable = require('express-formidable');
app.use(formidable({ uploadDir: './public' }));

app.listen(3000, () => console.log('Server start'));

app.post('/', (req, res) => {
    console.log(req.files.avatar);
    fs.rename(req.files.avatar.path, req.files.avatar.path + '.jpg', err => {
        res.send('xin chao');
    })
});