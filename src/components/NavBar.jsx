/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import { useContext } from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { PokemonContext } from '../context/PokemonContext'
import LOGO from '../assets/logo.png'

export const NavBar = () => {

    const { onInputChange, valueSearch, onResetForm } =
        useContext(PokemonContext);

    const navigate = useNavigate();

    const onSearchSubmit = e => {
        e.preventDefault();
        navigate('/search', {
            state: valueSearch,
        });

        onResetForm();
    };

    return (
        <>
            <header className='container'>
                <Link to='/' className='logo'>
                    <img
                        src={LOGO}
                        alt='Logo Pokedex'
                    />
                </Link>

                <form onSubmit={onSearchSubmit}>
                    <div className='form-group'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='icon-search'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                            />
                        </svg>
                        <input
                            type='search'
                            name='valueSearch'
                            id=''
                            value={valueSearch}
                            onChange={onInputChange}
                            placeholder='Buscar nombre de pokemon'
                        />
                    </div>

                    <button className='btn-search'>Buscar</button>
                </form>
            </header>

            <Outlet />
        </>
    );
};


/**
 * <header>
                <nav className="nav">
                    <Link to='/' className='logo'>
                        <img src={LOGO} alt="Logo Pokédex" />
                    </Link>

                    <ul className="nav-list">
                        <li className="nav-item"><button className="btn btn-header" id="ver-todos">Ver Todos</button></li>
                        <li className="nav-item"><button className="btn btn-header normal" id="normal">Normal</button></li>
                        <li className="nav-item"><button className="btn btn-header fire" id="fire">Fire</button></li>
                        <li className="nav-item"><button className="btn btn-header water" id="water">Water</button></li>
                        <li className="nav-item"><button className="btn btn-header grass" id="grass">Grass</button></li>
                        <li className="nav-item"><button className="btn btn-header electric" id="electric">Electric</button></li>
                        <li className="nav-item"><button className="btn btn-header ice" id="ice">Ice</button></li>
                        <li className="nav-item"><button className="btn btn-header fighting" id="fighting">Fighting</button></li>
                        <li className="nav-item"><button className="btn btn-header poison" id="poison">Poison</button></li>
                        <li className="nav-item"><button className="btn btn-header ground" id="ground">Ground</button></li>
                        <li className="nav-item"><button className="btn btn-header flying" id="flying">Flying</button></li>
                        <li className="nav-item"><button className="btn btn-header psychic" id="psychic">Psychic</button></li>
                        <li className="nav-item"><button className="btn btn-header bug" id="bug">Bug</button></li>
                        <li className="nav-item"><button className="btn btn-header rock" id="rock">rock</button></li>
                        <li className="nav-item"><button className="btn btn-header ghost" id="ghost">Ghost</button></li>
                        <li className="nav-item"><button className="btn btn-header dark" id="dark">Dark</button></li>
                        <li className="nav-item"><button className="btn btn-header dragon" id="dragon">Dragon</button></li>
                        <li className="nav-item"><button className="btn btn-header steel" id="steel">Steel</button></li>
                        <li className="nav-item"><button className="btn btn-header fairy" id="fairy">Fairy</button></li>
                    </ul>
                </nav>
            </header>

            <Outlet />
 */