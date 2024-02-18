import React from 'react';
import { saveStorage } from '../../helper/saveLocalStorage';

function EditMovie( { movie, getMovies, setListMovies, setEdit} ){

	const title = "Edit movie";

	const saveItemsStorage = saveStorage('moviesv1', []);

	const editMovie = (e, idMovie) => {	
		e.preventDefault();

		//get target event
		let target = e.target;
		let title = target.titleEdit.value;
    let description = target.editDescription.value;

    //create movie item
		const saveMovies = getMovies();
		const index = saveMovies.findIndex(movie => movie.id === idMovie);

		//create object
		let movieUpgrade = {
			id: idMovie,
			title,
			description
		};

		//upgrade element
		saveMovies[index] = movieUpgrade;

		//save in localStorage
		saveItemsStorage(saveMovies);

		//upgrade states
		setListMovies(saveMovies);

		setEdit(0);
	};	

	return (
			<div className='edit__container'>
				<h3 className='edit__container-title'>{title + ": " + movie.title}</h3>
				<form onSubmit={e => editMovie(e, movie.id)}>
					<input 
					type='text'
					name='titleEdit'
					className='edit__container-input-title'
					defaultValue={movie.title}
					/>
					<textarea
					name='editDescription'
					defaultValue={movie.description}
					className='edit__container-input-text'
					/>
					<input 
					type='submit'
					className='edit__send'
					value="upgrade"
					/>
				</form>
			</div>
	);
}

export { EditMovie };