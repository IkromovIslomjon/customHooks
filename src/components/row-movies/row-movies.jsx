import React from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import MovieInfo from '../movie-info/movie-info'
import RowMoviesItem from '../row-movies-item/row-movies-item'
import './row-movies.scss'

import Error from '../error/error'
import Loading from '../loader/loading'
import { useState, useEffect } from 'react'
import useMovieService from '../../services/movieService'
import { useLocation } from 'react-router-dom'

const RowMovies = () => {

	const [open,setOpen] = useState(false);
	const [movies, setMovies] = useState([])
	const [movieId, setMovieId] = useState(null);
	const {pathname} = useLocation();
	const [page, setPage] = useState(2);

	const {getTrendingMovie, getPopularMovie,  loading ,error} = useMovieService()

	useEffect(()=>{
		getMovies()
	},[])

	const getMovies = (page)=>{	
		if(pathname === '/popular'){
			getPopularMovie(page).then((res) => setMovies(movies=>[...movies, ...res]))

		}else{
			getTrendingMovie(page).then((res) => setMovies(movies=>[...movies, ...res]))
		}

	}

	const getMoreMovies = () => {
		setPage(page => page+1)
		getMovies(page)
	}


	
	const onOpen = (id) => {
		setOpen(true)
		setMovieId(id)
	}
	const onCloseModal = () => {
		setOpen(false)
	}

	
	
		const errorContent = error ? <Error/> : null;
		const loadingContent = loading ? <Loading/> : null;
	

		return (
			<div className='app__rowmovie'>
				<div className='app__rowmovie-top'>
					<div className='app__rowmovie-top__title'>
						<img src='/tranding.svg' alt='' />
						<h1>{pathname === '/popular' ? "Popular" : "Trending"}</h1>
					</div>
					<div className='hr' />
					<a href='#'>See more</a>
				</div>
				{errorContent}
				{loadingContent}
				<Content movies={movies} onOpen = {onOpen} />


			

				<Modal open={open} onClose={onCloseModal}>
					<MovieInfo
					movieId={movieId}

					 />
				</Modal>
				<div className="btn-wrapper">
				<button className='btn btn-secondary' onClick={getMoreMovies}>Load More</button>
			</div>
			</div>
			
		)
	}


export default RowMovies

const Content = ({movies, onOpen})=>{
return(

	<div className='app__rowmovie-lists'>
	{movies.map((movie, index) => (
		<RowMoviesItem
			key={index}
			movie={{ ...movie, index }}
			onOpen={onOpen}
		/>
	))}
</div>
)
}


