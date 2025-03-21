import { Link, NavLink } from 'react-router-dom'
import { nav_links } from '../../constants'
import './header.scss'

const Header = () => {
	return (
		<div className='app__header'>
			<h1 className='app__logo'>
				<Link to={"/"}>
					<img src='/logo.svg' alt='logo' />
					<img src='/logo-text.svg' alt='logo-text' />
					</Link>
			</h1>
			<nav className='app__menu'>
				<ul>
					{nav_links.map((item)=>(
						<li key={item.route}>
						<NavLink to={item.route}
						className={({ isActive }) => isActive ? "active": null}
						>
						{item.label}
						</NavLink>
					</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Header
