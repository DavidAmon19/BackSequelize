const express       = require('express');
const cors          = require('cors');
const usuarioRouter = require('./routes/usuarioRoute');
const port          = 9090;

const app = express();


app.use(cors());
app.use(express.json());


app.use('/usuario', usuarioRouter);


app.listen(port, ()=>{
    try {
        console.log(`Servidor rodando no link http://localhost:${port}`)
    } catch (error) {
        console.log(`Erro ao iniciar servidor ${error}`)
    }
})