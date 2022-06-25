const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');
const eventDate = document.getElementById('enterDate');

function countdown () {
    const getDate = eventDate.value
    const newGetDate = new Date(getDate);
    const currentDate = new Date();

    const totalSeconds = (newGetDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24) ;
    const hours = Math.floor(totalSeconds / 3600) % 24 ; 
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds ) % 60;
    daysEl.innerHTML = days ;
    hoursEl.innerHTML = hours ;
    minEl.innerHTML = minutes ;
    secEl.innerHTML = seconds ;

}

eventDate.addEventListener('click', function() {


    countdown();
    setInterval(countdown , 1000);
})
