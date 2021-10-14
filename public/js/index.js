var swIndex = 1;
var svIndex = 1;
swPush(0);
svPush(0);
setInterval(()=>swPush(+1), 5000);
setInterval(()=>svPush(+1), 5000);
setInterval(updateCount, 5000);

function swPush(n) {
   swDisplay(swIndex += n);
}

function swDisplay(n) {
   var i;
   var x = document.getElementsByClassName("sw-img");
   if (n > x.length) { swIndex = 1 }
   if (n < 1) { swIndex = x.length } ;
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }
   x[swIndex-1].style.display = "block";
}

function svPush(n) {
   svDisplay(svIndex += n);
}

function svDisplay(n) {
   var i;
   var x = document.getElementsByClassName("sv-img");
   if (n > x.length) { svIndex = 1 }
   if (n < 1) { svIndex = x.length } ;
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
   }
   x[svIndex-1].style.display = "block";
}