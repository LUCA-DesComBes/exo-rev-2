const role = document.querySelector(".role");
const elo = document.querySelector(".elo");
const btn = document.getElementById("btn");

function testerJoueur(role, elo) {
	if (role == "tank" && elo >= 1500) {
		return true;
	}
	if (role == "dps" && elo >= 2500 && elo <= 4500) {
		return true;
	}
	if (role == "heal" && elo < 2000) {
		return true;
	}
	return false;
}

btn.addEventListener("click", (e) => {
	e.preventDefault();
    const valueRole = role.value;
    const valueElo = parseInt(elo.value);
	const result = testerJoueur(valueRole, valueElo);
	if (result) {
		alert("play");
	} else {
		return alert("not play");
	}
});
