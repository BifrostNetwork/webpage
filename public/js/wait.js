const date = new Date(1635633000000);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
simplyCountdown('#countdown', {
   year,
   month,
   day,
   hours: hour,
   minutes: minute,
   seconds: second,
   words: {
       days: { singular: 'Dia', plural: 'Dias' },
       hours: { singular: 'Hora', plural: 'Horas' },
       minutes: { singular: 'Minuto', plural: 'Minutos' },
       seconds: { singular: 'Segundo', plural: 'Segundos' }
   },
   plural: true, //use plurals
   inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
   inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
   // in case of inline set to false
   enableUtc: false, //Use UTC or not - default : false
   onEnd: function() { return; }, //Callback on countdown end, put your own function here
   refresh: 1000, // default refresh every 1s
   sectionClass: 'simply-section', //section css class
   amountClass: 'simply-amount', // amount css class
   wordClass: 'simply-word', // word css class
   zeroPad: false,
   countUp: false
});

setInterval(() => {
    if(Date.now() > date.getTime()) {
        window.location.href = '/';
    }
}, 1000)

const start = () => {
    setTimeout(() => {
        video.style.display = 'none';
        for(let e of document.querySelectorAll('.hiden')) {
            e.classList.remove('hiden');
        }
    }, 9100)
}
var music = false
const togleMusic = () => {
    if(music) {
        music = false
        document.getElementById('audio').pause();
        document.getElementById('music').classList.add('fa-volume-mute');
        document.getElementById('music').classList.remove('fa-volume-up');
    } else {
        music = true
        document.getElementById('audio').play();
        document.getElementById('music').classList.remove('fa-volume-mute');
        document.getElementById('music').classList.add('fa-volume-up');
    }
}

start();