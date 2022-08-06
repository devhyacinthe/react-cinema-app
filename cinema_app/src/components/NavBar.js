import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/img/cinema-svgrepo-com.svg'




import '../styles/components/NavBar.css'

export const NavBar = () => {

    

  return (
    <nav className="nav">
        <ul className='nav__list'>
            <li className='nav__listlogo'>
                <img src={logo} alt="logo"></img>
            </li>
            <h1>Cine<span>Map</span></h1>
            <li className='nav__listitem'>
                Films
                <ul className='nav__listitemdrop'>
                    <Link to='/movies'>Populaires</Link>
                    <Link to='/movies/now-playing'>Du moment</Link>
                    <Link to='/movies/upcoming'>A venir</Link>
                    <Link to='/movies/top-rated'>Les mieux notés</Link>
                </ul>
            </li>
            <li className='nav__listitem'>
                Emissions télévisées
                <ul className='nav__listitemdrop'>
                    <Link to='/tv'>Populaires</Link>
                    <Link to='/tv/now-playing'>Diffusées aujourd'hui</Link>
                    <Link to='/tv/upcoming'>En cours de diffusion</Link>
                    <Link to='/tv/top-rated'>Les mieux notées</Link>
                </ul>
            </li>

        </ul>
    </nav>
  )
}
