const saveStorage = (key,item) => {

	//get data local storage
	let localStorageItem = localStorage.getItem(key);
	//let localStorageItem = JSON.parse(localStorage.getItem(key));

	let locaItem;
	//add elements
	if(!localStorageItem){
		localStorage.setItem(key, JSON.stringify(item));
	}
	else{
		locaItem = JSON.parse(localStorageItem);
		localStorage.setItem(key, JSON.stringify(locaItem));
	}

	const saveLocalStorage = (newStorage) => {
		localStorage.setItem(key, JSON.stringify(newStorage));
	};

	return saveLocalStorage;
}

export { saveStorage };