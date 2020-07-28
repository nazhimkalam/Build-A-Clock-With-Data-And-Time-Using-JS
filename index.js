const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const date = document.getElementById('date');
setClock();
setInterval(setClock, 1000);

function setClock() {
	let currentDate = new Date();
	let secondsRatio = currentDate.getSeconds() / 60;
	let minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
	let hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

	setRotation(secondHand, secondsRatio);
	setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);

    date.innerText = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear() 
}

function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360);
}
