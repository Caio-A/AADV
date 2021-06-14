const { response } = require('../app');
const db = require('../config/database');

exports.list = async (req, res) => {
  const response = await db.query(
      'SELECT * FROM almocos'
  );
  res.status(200).send(response.rows);
};
