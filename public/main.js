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
		elemArray[inputCounter].classList.add('out');

		if (elemArray[inputCounter + 1]) {
			elemArray[inputCounter + 1].style.animationName = 'fade-in';
			elemArray[inputCounter + 1].classList.add('in');
		}
	}


	for (let elem of elemArray) {
		if (elem.querySelector('input' )|| elem.querySelector('select')){
			let input = elem.querySelector("#preference")|| elem.querySelector('input' ) || elem.querySelector('select');
			input.addEventListener('change', handleChange);
			input.addEventListener('keyup', function(e){
				console.log(input);
				if (e.keyCode === 9){
					console.log(score.value)
					//e.preventDefault();
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

	},1000)



})