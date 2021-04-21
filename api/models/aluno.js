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

exports.find = async (id) => {
    const response = await db.query(
        'SELECT * FROM Alunos WHERE id = $1',
        [id],
    );
    return response.rows
};