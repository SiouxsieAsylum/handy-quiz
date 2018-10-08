document.addEventListener('DOMContentLoaded', function(){
	const whom = document.getElementById('whom');
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

	for (let elem of elemArray) {
		if (elem.querySelector('input' )|| elem.querySelector('select') || submit){
			let input = elem.querySelector("#preference") || elem.querySelector('input' ) || elem.querySelector('select') || submit;
			input.addEventListener('change', handleChange);
			input.addEventListener('keyup', function(e){
				if (e.keyCode === 9 && input.value.length){
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

	//prevent submission by enter key until all have been answered
	function enter(e){
		if (e.keyCode === 13) {
			if (inputCounter < elemArray.length - 2){
				e.preventDefault();
			}
			else{
				window.removeEventListener('keydown', enter);
			}
		}
	}

	window.addEventListener('keydown', enter);

	submit.addEventListener('click', function(){
		window.removeEventListener('keydown', enter);
	})
})