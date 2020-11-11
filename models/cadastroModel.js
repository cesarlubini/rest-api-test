const Database = require('../database/db');

class Cadastro {

  async listaTodos(res) {
    try{
      const db = await Database
      const results = await db.all("SELECT * FROM Cadastros")
      return res.send(results);

    } catch(error) {
      console.log(error)
      return res.send("Erro ao incluir Cadastro")
    }
  }

  async cadastro(id, res) {
    try {
      const db = await Database;
      const result = await db.get(`
        SELECT * FROM Cadastros WHERE id=${id}
      `)

      return res.send(result);

    } catch(error) {
      console.log(error);

      return res.send("Erro ao buscar cadastro");
    }
  }

  async novo(cadastro, res) {
    try{
      const db = await Database
      await db.run(`
        INSERT INTO Cadastros (
          name,
          age,
          gender,
          smoke,
          drink
        ) VALUES (
          "${cadastro.name}",
          "${cadastro.age}",
          "${cadastro.gender}",
          "${cadastro.smoke}",
          "${cadastro.drink}"
        )
      `)
  
      return res.send(cadastro)

    } catch(error) {
      console.log(error)

      return res.send("Erro no banco de dados")
    }
  }
  
  async atualiza(id, cadastro, res) {
    try {
      const db = await Database;
      await db.run(`
        UPDATE Cadastros SET
          name = "${cadastro.name}",
          age = "${cadastro.age}",
          gender = "${cadastro.gender}",
          smoke = "${cadastro.smoke}",
          drink = "${cadastro.drink}"
        WHERE id=${id}
      `)

      return res.send(cadastro)

    } catch(error) {
      console.log(error)

      return res.send("Erro ao atualizar dados")
    }
  }

  async deleta(id, res) {
    try{
      const db = await Database;
      await db.run(`
        DELETE FROM Cadastros WHERE id=${id}
      `)
  
      return res.send(`ID ${id} deletado com sucesso`);

    } catch(error) {

    console.log(error)
    return res.send("Erro ao deletar dados")

    }
  }
}


module.exports = new Cadastro;