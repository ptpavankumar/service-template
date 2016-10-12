const Router = require('express').Router;

const router = new Router();

router.get('/_health', (req, res) => {
  res.status(200).send('ok');
});

module.exports = router;
