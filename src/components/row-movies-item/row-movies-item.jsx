import './row-movies-item.scss'

const RowMoviesItem = ({ movie, onOpen }) => {

	
	return (
		<div className='list__item' onClick={()=> onOpen(movie.id)}>
			<img src={movie.image} alt={movie.title} />
			<h2>
			{movie.index + 1} {movie.title} 
			</h2>
			<div className='list__item-descr'>
				
				<div className='dot' />
				
			</div>
		</div>
	)
}

export default RowMoviesItem
