const { response } = require('../app');
const db = require('../config/database');
const aluno = require('../models/aluno')
const _ =  require('lodash')

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
  result = await aluno.list()
  res.status(200).send(result);
};

// ==> Método responsável por selecionar 'Aluno' pelo 'Id':
exports.findAlunoById = async (req, res) => {
  const id = parseInt(req.params.id);

  result = await aluno.find(id)
  res.status(200).send(result);
};

// ==> Método responsável por criar um novo 'Aluno':
exports.createAluno = async (req, res) => {
  colunas_str = '('
  let body = _.pickBy(req.body, _.identity)
  colunas = Object.keys(body)
  let  i = 0;
  for(; i < colunas.length - 1; i++)
  {
    colunas_str += colunas[i] + ', '
  }
  colunas_str += colunas[i] + ')'

  let query = `INSERT INTO alunos ${colunas_str} VALUES (${get_values_placeholders(Object.values(body).length)})`
  try{
    const response = await db.query(query,Object.values(body),
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


exports.updateAlunoById = async (req, res) => {  
  let body = _.pickBy(req.body, _.identity)
  console.log(body)
  const id = parseInt(req.params.id);
  const keys = Object.keys(body)
  let values = Object.values(body)
  values.push(id) // adiciona o id aos values
  let str = ""
  let i;
  for (i = 0; i < keys.length - 1; i++)
  {
      str += `${keys[i]} = $${i+1}, `
  }
  str += `${keys[i]} = $${i+1}`
  let query = `UPDATE Alunos SET ${str} WHERE id = $${i+2}`
  
  try{
    console.log(`query tried: ${query}`)
    const response = await db.query(query,values);
  }
  catch(err)
  {
    res.status(400).send({
      message: 'Não foi possível atualizar o aluno',
      erro: err.stack,
      sql:  query
    });
    return 
  }

  res.status(201).send({
    message: 'Aluno editado!',
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