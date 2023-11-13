const express = require('express');
console.log('serverr')
const app = express();
const port = 3000;



//variables con los módulos de routes importados
const homeRoutes = require('./routes/home.routes')
const movieRoutes = require('./routes/movie.routes')

//habilitamos recepción de json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
//habilitamos uso de pug y su carpeta
app.set('view engine','pug');
app.set('views','./views')

//usamos rutas importadas
app.use('/', homeRoutes);
app.use('/film', movieRoutes)


//habilitamos puerto 
app.listen(port,()=>{
    console.log(`escuchando en el puerto: http://localhost:${port} `)
})

