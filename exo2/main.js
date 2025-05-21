const obj = [
	{
		lastname: "A",
		name: "B",
		role: "tank",
		elo: 1500,
	},
	{
		lastname: "C",
		name: "D",
		role: "dps",
		elo: 1350,
	},
	{
		lastname: "E",
		name: "F",
		role: "heal",
		elo: 1000,
	},
	{
		lastname: "G",
		name: "H",
		role: "tank",
		elo: 2000,
	},
	{
		lastname: "I",
		name: "J",
		role: "dps",
		elo: 1001,
	},
	{
		lastname: "K",
		name: "L",
		role: "heal",
		elo: 4500,
	},
];

const tbody = document.querySelector("tbody");
const btnFilter = document.getElementById("btn");

function createElement(tag, attributes = {}, textContent = "") {
	const element = document.createElement(tag);
	for (const key in attributes) {
		if (key === "className") element.className = attributes[key];
		else element.setAttribute(key, attributes[key]);
	}
	if (textContent) element.textContent = textContent;
	return element;
}

function createTable(lastname, name, role, elo) {
	const tr = createElement("tr", {}, "");
	const tdLastName = createElement("td", {}, lastname);
	const tdName = createElement("td", {}, name);
	const tdRole = createElement("td", {}, role);
	const tdElo = createElement("td", {}, elo);

	tr.append(tdLastName, tdName, tdRole, tdElo);

	return tr;
}

function filtrerDecroissant(tab) {
	const array = [];

	for (let i = 0; i < tab.length; i++) {
		array.push(tab[i]);
	}

	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i].elo < array[j].elo) {
				const truc = array[i];
				array[i] = array[j];
				array[j] = truc;
			}
		}
	}

	return array;
}

for (let i = 0; i < obj.length; i++) {
	const el = obj[i];
	const myTable = createTable(el.lastname, el.name, el.role, el.elo);
	tbody.appendChild(myTable);
}

btnFilter.addEventListener("click", (e) => {
	e.preventDefault();
	tbody.innerHTML = "";
	let tab = filtrerDecroissant(obj);

	console.log(obj, tab);

	for (let i = 0; i < tab.length; i++) {
		const el = tab[i];
		const myTable = createTable(el.lastname, el.name, el.role, el.elo);
		tbody.appendChild(myTable);
	}
});
