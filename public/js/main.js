const ipServer = 'mc.bifrostnetwork.es'
var updateCount = () => {
   const count = document.querySelector('#online-count');
   fetch('https://api.mcsrvstat.us/2/mc.bifrostnetwork.es')
   .then(res => res.json())
   .then(data => {
      count.innerHTML = `${data.players.online} jugadores ahora mismo!`;
   });
};
updateCount()

const copyIp = () => {
   document.querySelector('#ip').innerHTML = 'IP copiada!';
   navigator.clipboard.writeText(ipServer);
   setTimeout(() => {
      ip.innerHTML = ipServer;
   }, 1500);
};