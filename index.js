console.log('cool');

//check if data is not in localstorage set some values

var existing = localStorage.getItem('table');
if (!existing) {
	console.log('Table does not exist');
	let data = [
		{ name: 'lorem ipsum 1', age: 10 },
		{ name: 'lorem ipsum 2', age: 20 },
		{ name: 'lorem ipsum 3', age: 30 },
		{ name: 'lorem ipsum 4', age: 40 },
		{ name: 'lorem ipsum 5', age: 50 },
		{ name: 'lorem ipsum 6', age: 60 },
	];
	localStorage.setItem('table', JSON.stringify(data));
} else {
	console.log('Table data exist');
}

// showing data

var tab = document.getElementById('mytable');

displayDataonTable();

function displayDataonTable() {
	var data = localStorage.getItem('table');
	data = JSON.parse(data);
	tab.innerHTML = `<tr> <th> Name </th> <th> Age</th>  </tr>`;
	for (let i = data.length - 1; i >= 0; i--) {
		let el = data[i];
		tab.innerHTML += `<tr> <td> ${el.name} </td> <td> ${el.age}</td>  </tr>`;
	}
}

function add() {
	var name = document.getElementById('nameInput');
	var age = document.getElementById('ageInput');
	if (name.value && age.value) {
		var data = localStorage.getItem('table');
		data = JSON.parse(data);
		data.push({ name: name.value, age: age.value });
		localStorage.setItem('table', JSON.stringify(data));
		name.value = '';
		age.value = '';
		displayDataonTable();
	}
}
