
const express = require('express')
const port = (process.env.port || 3000)

// express
const app = express()

//admitir
app.use(express.json())

//configurar
app.set('port',port)

//rutas
//app.use('/api', require('./productos'));
app.use('/api', require('./routes/productos'));



//inicializar express
app.listen(app.get('port'),(error)=>{
    if(error)
    {console.log('error al iniciar el servidor: '+error)}
    else{
        console.log('Productos server.... ');
    }
})