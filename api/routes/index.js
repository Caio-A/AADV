const express = require('express');

const router = express.Router();

router.get('/api', (req, res) => {
  res.status(200).send('Api');
});

module.exports = router;