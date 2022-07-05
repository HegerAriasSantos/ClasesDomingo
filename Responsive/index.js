let arr = [];
fetch("https://rickandmortyapi.com/api/character")
	.then(data => {
		return data.json();
	})
	.then(data => {
		arr = data.results;
		arr.forEach(element => {
			console.log(element);
		});
	});