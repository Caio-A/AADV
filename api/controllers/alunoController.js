const { response } = require('../app');
const db = require('../config/database');
const aluno = require('../models/aluno')

// concatena os nomes das colunas em uma string
const get_column_string = () => { return columns.join(', ')}

// retorna strings para placeholders em sql tipo $1, $2 ... $n para n de input
function get_values_placeholders (num_values) {
  placeholders = ""
  for(i = 1; i < num_values; i++)
  {
    placeholders += `$${i}, `
  }
  placeholders += `$${i}`
  return placeholders;
}


// ==> Método responsável por listar todos os 'Alunos':
exports.listAllAlunos = async (req, res) => {
  const response = await db.query(
    'SELECT * FROM alunos',
  );
  res.status(200).send(response.rows);
};

// ==> Método responsável por selecionar 'Aluno' pelo 'Id':
exports.findAlunoById = async (req, res) => {
  const id = parseInt(req.params.id);

  result = await aluno.find(id)
  res.status(200).send(result);
};

// ==> Método responsável por criar um novo 'Aluno':
exports.createAluno = async (req, res) => {

  let query = `INSERT INTO alunos VALUES (${get_values_placeholders(aluno.columns.length)})`
  try{
    const response = await db.query(query,Object.values(req.body),
    );
  }
  catch(err)
  {
    res.status(400).send({
      message: 'Não foi possível cadastrar o aluno',
      erro: err.stack,
      sql:  query
    });
    return 
  }

  res.status(201).send({
    message: 'Aluno adicionado!',
    body: response,
  });

};


// ==> Método responsável por atualizar um 'Aluno' pelo 'Id':
exports.updateAlunoById = async (req, res) => {
  // deve checar pegar os nomes dos campos, selecionar aqueles dentro de fillable
  // e atualizar aqueles apenas. Ou pegar todos os dados e substuir os que foram passados
  // e enviar todos de uma vez
  let query = 'UPDATE Alunos SET Aluno_name = $1, quantity = $2, price = $3 WHERE id = $4'
  try{
    const response = await db.query(query,Object.values(req.body),
    );
  }
  catch(err)
  {
    res.status(400).send({
      message: 'Não foi possível cadastrar o aluno',
      erro: err.stack,
      sql:  query
    });
    return 
  }

  res.status(201).send({
    message: 'Aluno adicionado!',
    body: response,
  });

    
};

// ==> Método responsável por excluir um 'Aluno' pelo 'Id':
exports.deleteAlunoById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM Alunos WHERE id = $1', [
    id,
  ]);

  res.status(200).send({ message: 'Aluno deleted successfully!', id });
};