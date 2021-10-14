const express = require('express');
const router = express.Router();
var date = new Date(1635541200000);

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

router.get('/staff', (req, res) => {
   res.render('pages/staff', {
       active: 'staff'
   });
});

//reditects
router.get('/discord', (req, res) => {
    res.redirect('https://discord.gg/pvcBYFzxe7');
});


module.exports = router;