/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { NavBar } from '../components/'
import { HomePage, PokemonPage, SearchPage } from '../pages/'


export default function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<NavBar />} > {/**este seria el elemento principal que se renderiza, se puede cambiar a login, home etc */}
                <Route index element={<HomePage />} />
                <Route path='pokemon/:id' element={<PokemonPage />} />
                <Route path='search' element={<SearchPage />} />
            </Route>

            <Route path='*' element={<Navigate to='/' />} /> {/**Cuando la ruta no exista se envia al path principal, se puede enviar a una pagina de errores */}
        </Routes>
    )

}
