const Cadastro = require('../models/cadastroModel');

module.exports = app => {

  app.get('/cadastros', (req,res) => {
    Cadastro.listaTodos(res);
  });

  app.get('/cadastro/:id', (req,res) => {
    const id = parseInt(req.params.id);

    Cadastro.cadastro(id, res);
  })

  app.post('/cadastro', (req, res) => {
    
    const cadastro = req.body;
    Cadastro.novo(cadastro, res);
  })

  app.put('/cadastro/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const cadastro = req.body;

    Cadastro.atualiza(id, cadastro, res);
  })

  app.delete('/cadastro/:id', (req, res) => {
    const id = parseInt(req.params.id);

    Cadastro.deleta(id, res);
  })

}