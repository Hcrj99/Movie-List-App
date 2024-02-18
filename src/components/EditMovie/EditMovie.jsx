import React from 'react';

function EditMovie( {movie} ){

	const title = "Edit movie";

	return (
			<div className='edit__container'>
				<h3 className='edit__container-title'>{title}</h3>
				<form>
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