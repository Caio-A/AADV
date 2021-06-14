var XLSX = require('xlsx');
var _ = require('lodash');
var fs = require('fs');

var workbook = XLSX.readFile('a.xlsx');

// WORKSHEETS:
// 0 - CADASTRO
// 1 - ALMOÇO
var first_sheet_name = workbook.SheetNames[0];
var address_of_cell = 'A1';
 
/* Get worksheet */
var worksheet = workbook.Sheets[first_sheet_name];
 
json = XLSX.utils.sheet_to_csv(worksheet).split('\n')

// VALORES PARA LIMIT:
// cadastro 41
// almoco 16
let csv_line_to_array = function (line, limit)
{
    word = ''
    rows = []
    quote_active = false
    for(let i = 0; i < line.length; i++)
    {
        if(line[i] == '"')
        {
            quote_active = !quote_active
        }
        if(line[i] == ',' && !quote_active)
        {
            rows.push(word)
            word = ''
        }
        else
        {
            word += line[i]
        }
    }
    return rows.splice(0,limit)
}

row_names = csv_line_to_array(json[1], 41),

offset = 3;
arr = []
for(let i = 0; i < 100; i++)
{
    row = csv_line_to_array(json[offset + i], 41)
    tmp = _.zipObject(row_names, row)

    a = {
        "id": tmp['Nº'],
        "matricula": tmp['Nº MATRÍCULA'],
        "nome": tmp["NOME"],
        "endereco": tmp['ENDEREÇO'],
        "bairro": tmp["Bairro"],
        "cep": tmp["CEP"],
        "cidade": tmp['CIDADE/ESTADO'],
        "estado": tmp['CIDADE/ESTADO'],
        "aadv": tmp['AADV / Hellen Keller'],
        "telefones": tmp["TELEFONES"],
        "nascimento": tmp['DATA DE NASCIMENTO'],
        "responsavel": tmp['Responsável'],
        "ingresso": tmp['DATA INGRESSO NA INSTITUIÇÃO'],
        "escola": tmp["ESCOLA"],
        "rg": tmp["RG"],
        "cpf": tmp["CPF"],
        "cns/sus": tmp['CNS/SUS'],
        "beneficio": tmp['BENEFÍCIO'],
        "passe_livre": tmp['PASSE LIVRE'],
        "cadastro_estadual": tmp['CADASTRO ESTADUAL'],
        "patologia_deficiencia_visual": tmp['PATOLOGIA DEFICIÊNCIA VISUAL'],
        "outras_patologias": tmp['OUTRAS PATOLOGIA'],
        "medicamentos": tmp["MEDICAMENTOS"],
        "alergias": tmp["ALERGIAS"],
        "planos_de_saude": tmp['PLANO DE SAÚDE'],
        "medicos": tmp['MÉDICOS'],
        "observacao": tmp['OBSERVAÇÃO'],
        "sexo": tmp["SEXO"],
        "situacao": tmp['SITUAÇÃO ATUAL'],
        "residente_pocos": tmp['RESIDENTE EM POÇOS?'],
        "faixa_etaria": tmp['FAIXA ETÁRIA'],
        "deficiencia_visual": tmp['DEFICIÊNCIA VISUAL'],
        "multiplo": tmp['MÚLTIPLO'],
        "diabetico": tmp['DIABÉTICO'],
        "alunos_almoco": tmp['ALUNOS ALMOÇO'],
        "periodo": tmp['PERIODO'],
        "aluno_ensino_regular": tmp['ALUNO ENSINO REGULAR'],
        "aluno_alfabetizado": tmp['ALUNO ALFABETIZADO'],
        "tipo_de_leitura": tmp['TIPO DE LEITURA'],
        "fonte": tmp["FONTE"],
    }

    arr.push(a)
}


const { parse } = require('json2csv');

const fields = Object.keys(a);
const opts = { fields };

try {
  const csv = parse(arr, opts);
  //console.log(csv);
  fs.writeFile('teste.csv', csv, 'utf8', function (err) {
    if (err) return console.log(err);
    console.log('sucesso');
  });
} catch (err) {
  console.error(err);
}
