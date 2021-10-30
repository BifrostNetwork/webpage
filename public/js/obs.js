var date = new Date(1635633000000);
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
       days: { singular: 'D', plural: 'D' },
       hours: { singular: 'Hr', plural: 'Hrs' },
       minutes: { singular: 'Min', plural: 'Mins' },
       seconds: { singular: 'Seg', plural: 'Segs' }
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

const monitor = setInterval(() => {
    if(Date.now() > date.getTime()) {
        setTimeout(finish, 5000);
        clearInterval(monitor);
    }
    if(Date.now() > date.getTime() - (16*1000)) {
        document.querySelector("#alarma").play();
    }
}, 1000)

const finish = () => {
    document.querySelector("#explotion").classList.remove("hidden");
    document.querySelector(".cosito").classList.add("implotion");
    document.querySelector("#video").style.display = "none";
    setTimeout(() => {
        document.querySelector("#explotion").animate({
            width: ['15vw', '100vw'],
            height: ['20vh', '100vh'],
            top: ['40vh', '0'],
            easing: [ 'ease-in', 'ease-out' ],
            borderRadius: ['1em', '0']
        }, 1000);
        document.querySelector("#explotion").style.left = "0";
        document.querySelector("#explotion").style.width = "100vw";
        document.querySelector("#explotion").style.height = "100vh";
        document.querySelector("#explotion").style.top = "0";
        document.querySelector("#explotion").style.borderRadius = "0";
    }, 1000)
    setTimeout(() => {
        document.querySelector("#video").style.display = "block";
        document.querySelector("#video").play();
    }, 5000)
    setTimeout(() => {
        document.querySelector("#imgFinal").style.display = "block";
        document.querySelector("#video").style.display = "none";
    }, 88*1000)
}