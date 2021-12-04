const formateDates = () => {
   for(let date of document.querySelectorAll('.date')) {
      let dateValue = new Date(date.innerHTML);
      date.innerHTML = `${dateValue.getHours()}:${dateValue.getMinutes()} ${dateValue.getDate()}/${dateValue.getMonth()}`;
   }
}

var imgGigant = {
   state: false,
   meta: {
      with: '${position.width}px'
   }
}
const openImg = (element) => {
   window.open(element.src, '_blank');
}


formateDates()