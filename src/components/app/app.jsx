import { Route, Routes } from 'react-router-dom'
import ErrorBoundary from '../error-boundary/error-boundary'
import Header from '../header/header'
import Hero from '../hero/hero'
import RowMovies from '../row-movies/row-movies'
import HomePage from '../../pages/home-page'
import TvPage from '../../pages/tv-page'
import DetailedPage from '../../pages/detailed-page'
import NotFoundPage from '../../pages/not-found=page'
import Trending from '../../pages/trending'
import Popular from '../../pages/popular'

const App = () => {
	return (
		<div className='app'>
			<Header />

			<Routes>
				<Route path='/' element = {<HomePage/>}/>
				<Route path='/trending' element = {<Trending/>}/>
				<Route path='/popular' element = {<Popular/>}/>
				<Route path='/movie/:movieId' element = {<DetailedPage/>}/>
				<Route path='*' element = {<NotFoundPage/>}/>
			</Routes>
		
			
		</div>
	)
}

export default App
