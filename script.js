//your JS code here. If required.

function removeOption() {
	const select = document.getElementById("colorSelect");
	let index = select.selectedIndex;

	select.remove(index);
	
}