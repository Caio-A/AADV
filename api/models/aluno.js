const db = require('../config/database');

var moment = require('moment'); // require

exports.find = async (id) => {
    const response = await db.query(
        'SELECT * FROM Alunos WHERE id = $1',
        [id],
    );
    let resposta = trata_resposta(response)
    return resposta
};

get_mutator_nascimento = (value) => {
    return moment(value).format("YYYY-MM-DD")
}

get_mutator_ingresso = (value) => {
    return moment(value).format("YYYY-MM-DD")
}

trata_resposta = (resposta_raw) => {
    return resposta_raw.rows.map((aluno) => {
        aluno.nascimento = get_mutator_nascimento(aluno.nascimento)
        aluno.ingresso = get_mutator_ingresso(aluno.ingresso)
        return aluno
    })
}

exports.list = async (id) => {
    const response = await db.query(
      'SELECT * FROM alunos',
    );
    let resposta = trata_resposta(response)
    return resposta
};