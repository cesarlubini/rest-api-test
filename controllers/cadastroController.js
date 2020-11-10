const Cadastro = require('../models/cadastroModel');

module.exports = app => {

  app.get('/cadastros', (req,res) => {
    Cadastro.lista(res);
  });

  app.post('/cadastro', (req, res) => {
    
    const cadastro = req.body;
    Cadastro.novo(cadastro, res);
  })

}