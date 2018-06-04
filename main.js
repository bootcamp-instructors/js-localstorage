// Waits for page to load before firing
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        // Initialize your application or run some code.
        add.onclick = saveFoot;
        loadSavedFeet();
    }
};

function saveFoot() {

	var name = document.getElementById('name');
	var favoriteFoot = document.getElementById('favoriteFoot');

	var list = JSON.parse(localStorage.getItem('list'));
	if (list == null) {
		list = {};
	}
	list[name.value] = favoriteFoot.value;

	name.value = '';
	favoriteFoot.value = '';

	localStorage.setItem('list', JSON.stringify(list));

	loadSavedFeet();

}

function loadSavedFeet() {

	var list = JSON.parse(localStorage.getItem('list'));
	if (list == null) {
		list = {};
	}

	var savedFeet = document.getElementById('savedFeet');
	savedFeet.innerHTML = ''; // clear out all <li>

	for (var key in list) {
	    if (list.hasOwnProperty(key)) {
			var node = document.createElement('li');
			var textnode = document.createTextNode(key + ' - ' + list[key]);
			node.appendChild(textnode);
			savedFeet.appendChild(node);
	    }
	}
	
}