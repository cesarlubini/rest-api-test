const Database = require('../database/db');

class Cadastro {

  async lista(res) {
    const db = await Database
    const results = await db.all("SELECT * FROM Cadastros")
    res.send(results);
    console.log(results);
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
}

module.exports = new Cadastro;