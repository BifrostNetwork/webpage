const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', async(req, res) => {
  res.render('pages/wiki', { title: 'Express' });
});

router.get('/:category/:id', async(req, res) => {
  if(fs.existsSync(`./views/pages/wiki/${req.params.category}/${req.params.id}.ejs`)){
    res.render(`pages/wiki/${req.params.category}/${req.params.id}`);
  }else{
    res.redirect('/wiki');
  }
});
router.get('/mobs/', async(req, res) => {
  res.redirect('/wiki');
});
router.get('/mobs/', async(req, res) => {
  res.redirect('/wiki');
});


module.exports = router;