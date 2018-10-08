document.addEventListener('DOMContentLoaded', function(){
	const whom = document.getElementById('whom');
	const days = document.getElementById('days');
	const hours = document.getElementById('hours');
	const projects = document.getElementById('projects');
	const teams = document.getElementById('teams');
	const cake = document.getElementById('cake');
	const score = document.getElementById('score');
	const submit = document.getElementById('submit');

	let elemArray = Array.from(document.getElementsByClassName('fade'));
	let inputCounter = 0;

	function animate() {
		elemArray[inputCounter].classList.remove('in');
		elemArray[inputCounter].style.animationName = 'fade-out';
		elemArray[inputCounter].style.display = 'none';
		elemArray[inputCounter].classList.add('out');

		if (elemArray[inputCounter + 1]) {
			elemArray[inputCounter + 1].style.animationName = 'fade-in';
			elemArray[inputCounter + 1].style.zIndex = 1;
			elemArray[inputCounter + 1].classList.add('in');
		}
	}

	console.log(elemArray)
	for (let elem of elemArray) {
		if (elem.querySelector('input' )|| elem.querySelector('select') || submit){
			let input = elem.querySelector("#preference") || elem.querySelector('input' ) || elem.querySelector('select') || submit;
			input.addEventListener('change', handleChange);
			input.addEventListener('keyup', function(e){
				if (e.keyCode === 9){
					if (input.classList.contains('scored')) score.value  = Number(score.value) +  Number(input.value);
					input.removeEventListener('change', handleChange);
					animate();
					inputCounter++;

				}

			});

			function handleChange(){
				if (input.classList.contains('scored')) score.value  = Number(score.value) +  Number(input.value);
			}
		}

	}


	setTimeout(function(){
		whom.classList.add('fade');	
		whom.classList.add('in');	
		whom.style.animationName = 'fade-in';
		whom.style.zIndex = 1;

	},0)

	function enter(e){
		console.log(inputCounter, elemArray.length)
		if (e.keyCode === 13 && inputCounter < elemArray.length - 2) {
			e.preventDefault();
		}
	}
	window.addEventListener('keydown', enter);
})