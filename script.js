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
