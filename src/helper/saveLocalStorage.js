const saveStorage = (key,item) => {

	//get data local storage
	let itemLocal = JSON.parse(localStorage.getItem('movies'));//*covert JSON to Array

	//add elements
	Array.isArray(itemLocal) ? itemLocal.push(item) : itemLocal = item;

	//save items
	localStorage.setItem(key, JSON.stringify([itemLocal]));//*save local storage convert string to JSON

	return item;
}

export { saveStorage };