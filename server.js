const express       = require('express');
const cors          = require('cors');
const usuarioRouter = require('./routes/usuarioRoute');
const livroRouter   = require('./routes/livroRoute');
const emprestimoRouter = require('./routes/emprestimoRoute');
const port          = 9090;

const app = express();


app.use(cors());
app.use(express.json());


app.use('/usuario', usuarioRouter);
app.use('/livros', livroRouter);
app.use('/emprestimos', emprestimoRouter)

app.listen(port, ()=>{
    try {
        console.log(`Servidor rodando no link http://localhost:${port}`)
    } catch (error) {
        console.log(`Erro ao iniciar servidor ${error}`)
    }
})

module.exports = app;