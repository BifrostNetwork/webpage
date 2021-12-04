const express = require('express');
const ticketDB = require('../models/ticket');
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

router.get('/ticket/:t_id', async (req, res) => {
    if(!req.params.t_id){
        res.redirect('/');
    }
    let ticket = await ticketDB.findById(req.params.t_id);
    res.render('pages/ticket', {
        active: 'inicio',
        files: clasificarFiles(ticket.files),
        messages: formatearMensajes(ticket.messages),
        timeStamp: ticket.timeStamp,
        author: ticket.username
    });
});

//reditects
router.get('/discord', (req, res) => {
    res.redirect('https://discord.gg/pvcBYFzxe7');
});

router.get('/twitter', (req, res) => {
    res.redirect('https://twitter.com/Bifrost_Network');
});

const clasificarFiles = (files) => {
    const output = {
        images: [],
        videos: [],
        audios: [],
        others: [],
    }
    for(file of files){
        if(file.url.endsWith('jpg') || file.url.endsWith('png') || file.url.endsWith('jpeg') || file.url.endsWith('gif')){
            output.images.push(file);
        } else if(file.url.endsWith('mp4') || file.url.endsWith('webm')){
            output.videos.push(file);
        } else if(file.url.endsWith('mp3') || file.url.endsWith('ogg')){
            output.audios.push(file);
        } else {
            output.others.push(file);
        }
    }
    return output;
}
const formatearMensajes = (mensajes) => {
    const output = [];
    if(mensajes.length < 0 || mensajes == undefined)return;
    for(msg of mensajes){
        msg = msg.replace('[', '').split('] ');
        msg[1] = msg[1].split(' > ');
        msg = {
            date: msg[0],
            author: msg[1][0],
            content: msg[1][1]
        }
        output.push(msg);
    }
    return output;
}

module.exports = router;