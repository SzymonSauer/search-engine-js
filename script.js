const ulList = document.querySelector('ul');
const liEl = document.querySelectorAll('li');
const search = document.querySelector('.search');
const arrayLi = Array.from(liEl);

const checkInput = () => {
	const word = search.value.toLowerCase();

	for (let i = 0; i < arrayLi.length; i++) {
		if (arrayLi[i].textContent.toLowerCase().includes(word)) {
			arrayLi[i].style.display = 'block';
		} else {
			arrayLi[i].style.display = 'none';
		}
	}
};

// search.addEventListener('keydown', (event) => {
// 	if (event.code === 'Enter') checkInput();
// });

/*
search.addEventListener('keyup', checkInput);

const search = document.querySelector('.search');
const li = document.querySelectorAll('li');

const searchEngine = (e) => {
	const text = e.target.value.toLowerCase();
	console.log(text);

	li.forEach((x) => {
		if (x.textContent.toLowerCase().indexOf(text) !== -1) {
			x.style.display = 'block';
		} else {
			x.style.display = 'none';
		}
	});
};

search.addEventListener('keyup', searchEngine);
*/
