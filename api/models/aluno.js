const db = require('../config/database');

exports.columns = [
    "matricula",
    "nome",
    "endereco",
    "bairro",
    "cep",
    "cidade",
    "estado",
    "aadv",
    "telefones",
    "nascimento",
    "responsavel",
    "ingresso",
    "escola",
    "rg",
    "cpf",
    "cns_sus",
    "beneficio",
    "passe_livre",
    "cadastro_estadual",
    "patologia_deficiencia_visual",
    "outras_patologias",
    "medicamentos",
    "alergias",
    "planos_de_saude",
    "medicos",
    "observacao",
    "sexo",
    "situacao",
    "residente_pocos",
    "faixa_etaria",
    "deficiencia_visual",
    "multiplo",
    "diabetico",
    "alunos_almoco",
    "periodo",
    "aluno_ensino_regular",
    "aluno_alfabetizado",
    "tipo_de_leitura",
    "fonte"
]

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
    return moment(value).format("DD/MM/YYYY")
}

get_mutator_ingresso = (value) => {
    return moment(value).format("DD/MM/YYYY")
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