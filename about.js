console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert(`The form has been submitted successfully`);
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function doNotTouchMsg(evt) {
	evt.preventDefault();
	alert("Do not touch the cat! They do not like you!")
}

let cat = document.querySelector(`#cat`)

cat.addEventListener('mouseover', doNotTouchMsg)


