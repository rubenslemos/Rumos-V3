const http = require('express');
const app = http();
const route = require('./public/route')
const path = require('path');
const moment = require("moment");

app.use((req, res, next)=>{res.locals.moment=moment;next();});
app.set('view engine', 'ejs');
app.use(http.static("public"));
app.set('views', path.join(__dirname, 'views'));
app.use(http.urlencoded({ extended: false }))
app.use(http.json())
app.use(route)
app.listen(8081, () => console.log("Rodando!"));