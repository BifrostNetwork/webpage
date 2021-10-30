const express = require('express');
const router = express.Router();
var date = new Date(1635633000000);

const preview = (req, res, next) => {
    if(Date.now() > date.getTime()){
        next();
    } else {
        res.redirect('/wait')
    }
}

router.get('/', preview, (req, res) => {
    res.render('pages/index', {
        active: 'inicio'
    });
});

router.get('/wait', (req, res) => {
    if(date < Date.now()){
        res.redirect('/')
    }
    res.render('pages/wait', {
        active: 'espera'
    });
});
router.get('/wait-obs', (req, res) => {
    res.render('pages/obs');
});

router.get('/staff', (req, res) => {
   res.render('pages/staff', {
       active: 'staff'
   });
});

//reditects
router.get('/discord', (req, res) => {
    res.redirect('https://discord.gg/pvcBYFzxe7');
});

router.get('/twitter', (req, res) => {
    res.redirect('https://twitter.com/Bifrost_Network');
});


module.exports = router;