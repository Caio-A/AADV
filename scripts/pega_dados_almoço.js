var XLSX = require('xlsx');
var _ = require('lodash');
var fs = require('fs');

var workbook = XLSX.readFile('a.xlsx');

// WORKSHEETS:
// 0 - CADASTRO
// 1 - ALMOÇO
var first_sheet_name = workbook.SheetNames[1];
var address_of_cell = 'A1';
 
/* Get worksheet */
var worksheet = workbook.Sheets[first_sheet_name];
 
json = XLSX.utils.sheet_to_csv(worksheet).split('\n')



offset = 2;
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

offset = 2;
arr = []
for(let i = 0; i <= 216; i++)
{
    row = csv_line_to_array(json[offset + i], 16)

    a = {
        alunos_id:row[0],
        freq_seg: row[6],
        freq_ter: row[7],
        freq_qua: row[8],
        freq_qui: row[9],
        freq_sex: row[10],
        alm_seg: row[11],
        alm_ter: row[12],
        alm_qua: row[13],
        alm_qui: row[14],
        alm_sex: row[15],
        nome: row[1],
        endereco: row[2],
        bairro: row[3],
        cidade: row[4],
        diabeticos: row[5],
    }
    arr.push(a)
}


const { Parser } = require('json2csv');

const fields = Object.keys(a);
const opts = { fields };
const json2csvParser = new Parser();

try {
  const csv = json2csvParser.parse(arr, opts);
  //console.log(csv);
  fs.writeFile('teste.csv', csv, 'utf8', function (err) {
    if (err) return console.log(err);
    console.log('sucesso');
  });
} catch (err) {
  console.error(err);
}
